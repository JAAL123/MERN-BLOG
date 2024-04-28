import { Router } from "express";
import { createPost } from "../controllers/post.controller.js";
import { upload } from "../middlewares/multerMiddelware.js";

const router = Router();

router.post("/create-post", upload.single("image"), createPost);

export default router;
