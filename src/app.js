import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Api runnig");
});


export default app;
