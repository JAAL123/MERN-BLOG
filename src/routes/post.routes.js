import { Router } from "express";
import {
  createPost,
  getPosts,
  getPostById,
} from "../controllers/post.controller.js";
import { upload } from "../middlewares/multerMiddelware.js";

const router = Router();

router.post("/create-post", upload.single("image"), createPost);
router.get("/posts", getPosts);
router.get("/posts/:id", getPostById);

export default router;
