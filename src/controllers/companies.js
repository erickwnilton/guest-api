import { v4 } from "uuid";
import { Op } from "sequelize";
import { Company } from "../models/companies.js";

export async function getCompanies(req, res) {
  const FullCompanies = await Company.findAll();

  return res.status(200).json(FullCompanies);
}

export async function postCompany(req, res) {
  try {
    const { name, cnpj } = req.body;

    const companyExists = await Company.findOne({
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${name}%` } },
          { cnpj: { [Op.like]: `%${cnpj}%` } }
        ]
      }
    })

    if (companyExists) {
      return res.status(409).json({
        data: companyExists,
        message: "existing company"
      })
    }

    const newCompany = await Company.create({
      id: v4(),
      name: req.body.name,
      cnpj: req.body.cnpj,
      primaryColor: req.body.primaryColor,
      secundaryColor: req.body.secundaryColor,
      image: req.body.image
    })

    return res.status(201).json(newCompany)

  } catch (error) {
    return res.status(500).json({
      message: "server error when creating company"
    })
  }
}

export async function putCompany(req, res) {
  try {
    const findCompany = await Company.findByPk(req.params.id);

    if (!findCompany) {
      return res.status(404).json({
        message: "company does not exist"
      })
    }

    const CompanyUpdated = await findCompany.update(req.body)

    return res.status(200).json(CompanyUpdated)

  } catch (error) {
    return res.status(500).json({
      message: "server error when updating company"
    })
  }
}

export async function delCompany(req, res) {
  try {
    const findCompany = await Company.findByPk(req.params.id);

    if (!findCompany) {
      return res.status(404).json({
        message: "company does not exist"
      })
    }

    const CompanyDeleted = await findCompany.destroy(req.body)

    return res.status(200).json(CompanyDeleted)

  } catch (error) {
    return res.status(500).json({
      message: "internal error when deleting company"
    })
  }
}