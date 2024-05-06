import { Router } from "express";
import { authenticateToken } from "../middlewares/validateToken.js";
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
} from "../controllers/post.controller.js";
import { upload } from "../middlewares/multerMiddelware.js";

const router = Router();

router.post(
  "/create-post",
  authenticateToken,
  upload.single("image"),
  createPost
);
router.get("/posts", getPosts);
router.get("/posts/:id", getPostById);
router.put("/posts/:id", authenticateToken, upload.single("image"), updatePost);

export default router;
