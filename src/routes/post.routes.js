import { Router } from "express";
import { createPost } from "../controllers/post.controller";
import { upload } from "../middlewares/multerMiddelware";

const router = Router();

router.post("/", upload.single("image"), createPost);


export default router;