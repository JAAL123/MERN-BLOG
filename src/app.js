//dependencias
import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
//rutas
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

app.use("/api", userRoutes);
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("Api runnig");
});

export default app;
