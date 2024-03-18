import { v4 } from "uuid";
import { Product } from "../models/products.js";

export async function getProducts(req, res) {
  const FullProducts = await Product.findAll();

  return res.status(200).json(FullProducts);
}

export async function postProduct(req, res) {
  try {
    const newProduct = await Product.create({
      id: v4(),
      name: req.body.name,
      value: req.body.value,
      userId: req.body.userId,
      quantity: req.body.quantity,
      image: req.body.image
    })

    return res.status(201).json(newProduct)

  } catch (error) {
    return res.status(500).json({
      message: "internal server error when creating product"
    })
  }
}

export async function putProduct(req, res) {
  try {
    const findProduct = await Product.findByPk(req.params.id);

    if (!findProduct) {
      return res.status(404).json({
        message: "product does not exist"
      })
    }

    const productUpdated = await findProduct.update(req.body)

    return res.status(200).json(productUpdated)

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "internal server error when updating product"
    })
  }
}

export async function delProduct(req, res) {
  try {
    const findProduct = await Product.findByPk(req.params.id);

    if (!findProduct) {
      return res.status(404).json({
        message: "product does not exist"
      })
    }

    const productDeleted = await findProduct.destroy(req.body)

    return res.status(200).json(productDeleted)

  } catch (error) {
    return res.status(500).json({
      message: "internal server error when deleting product"
    })
  }
}