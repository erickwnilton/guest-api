import bcript from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { login } from "../../config.js";
import { User } from "../models/users.js";
import { Company } from "../models/companies.js";

export async function loginUser(req, res) {
  try {
    const { mail, password } = req.body;

    const user = await User.findOne({ where: { mail }, include: [{ model: Company }] });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      })
    }

    const passwordMatch = await bcript.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        message: "incorrect password"
      })
    }

    const token = jsonwebtoken.sign({ id: user.id }, login.secretKey, { expiresIn: "7d" });

    return res.json({
      user,
      token
    })

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'server error'
    });
  }
}