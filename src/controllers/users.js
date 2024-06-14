import bcript from "bcrypt";
import { v4 } from "uuid";
import { User } from "../models/users.js";

export async function getUsers(req, res) {
  const FullUsers = await User.findAll();

  return res.status(200).json(FullUsers);
}

export async function postUser(req, res) {
  try {
    const { mail } = req.body;

    const existingUserWithEmail = await User.findOne({ where: { mail } })

    if (existingUserWithEmail) {
      return res.status(400).json({
        message: "E-mail already exists"
      })
    }

    const hashedPassword = await bcript.hash(req.body.password, 10)

    const newUser = await User.create({
      id: v4(),
      name: req.body.name,
      mail: req.body.mail,
      document: req.body.document,
      password: hashedPassword
    })

    return res.status(201).json(newUser)

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "internal server error when creating user"
    })
  }
}

export async function putUser(req, res) {
  try {
    const findUser = await User.findByPk(req.params.id);

    if (!findUser) {
      return res.status(400).json({
        message: "user does not exist"
      })
    }

    const userUpdate = await findUser.update(req.body)

    return res.status(200).json(userUpdate)


  } catch (error) {
    return res.status(500).json({
      message: "server error when updating user"
    })
  }
}

export async function delUser(req, res) {
  try {
    const findUser = await User.findByPk(req.params.id);

    if (!findUser) {
      return res.status(400).json({
        message: "user does not exist"
      })
    }

    const userDelete = await findUser.destroy(req.body);

    return res.status(200).json(userDelete)

  } catch (error) {
    return res.status(500).json({
      message: "internal error when deleting user"
    })
  }
}