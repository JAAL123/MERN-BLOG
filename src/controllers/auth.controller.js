import bcrypt from "bcrypt";
import User from "../models/users.model.js";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { SECRET_TOKEN } from "../config.js";

export const login = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const userFound = await User.findOne({ userName });
    if (!userFound)
      return res
        .status(400)
        .json({ message: "Usuario o contraseña incorrectos" });
    const matchPassword = await bcrypt.compare(password, userFound.password);
    if (!matchPassword)
      return res
        .status(400)
        .json({ message: "Usuario o contraseña incorrectos" });

    const token = await createAccessToken({
      id: userFound._id,
      username: userFound.userName,
    });
    res.cookie("token", token);
    return res
      .status(200)
      .json({ username: userFound.userName, message: "ok"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.status(200).json({ message: "Logged out" });
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, SECRET_TOKEN, async (err, user) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "Unauthorized" });
    return res
      .status(200)
      .json({ userName: userFound.userName, message: "ok" });
  });
};
