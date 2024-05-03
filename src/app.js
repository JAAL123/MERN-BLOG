//dependencias
import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
//rutas
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

// servir imagenes
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use("/uploads", express.static(join(__dirname, "uploads")));
app.use("/api", userRoutes);
app.use("/api", authRoutes);
app.use("/api", postRoutes);

app.get("/", (req, res) => {
  res.send("Api runnig");
});

export default app;
