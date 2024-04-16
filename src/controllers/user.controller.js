import User from "../models/users.model.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { email, password, userName } = req.body;

  try {
    const encryptedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: encryptedPassword, userName });
    await newUser.save();
    res.status(201).json({
      id: newUser._id,
      email: newUser.email,
      userName: newUser.userName,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
