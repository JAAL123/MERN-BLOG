import jwt from "jsonwebtoken";
import { SECRET_TOKEN } from "../config";

export const authenticateToken = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, SECRET_TOKEN, (err, user) => {
    if (err) return res.status(403).json({ message: "Forbidden" });

    req.user = user;
    next();
  });
};
