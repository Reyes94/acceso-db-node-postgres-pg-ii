import { Router } from "express";
import { postController } from "../controllers/post.controller.js";

const router = Router();

router.get("/posts", postController.getAllPosts)
router.get("/posts/:id", postController.getAPost)
router.post("/posts", postController.addPost)
router.put("/posts/like/:id", postController.updateLikes)
router.delete("/posts/:id", postController.deletePost)

export default router;