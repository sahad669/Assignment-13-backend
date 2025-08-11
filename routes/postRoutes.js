import express from "express"
import {
    getAllPosts,
    addPosts,
    deletePosts,
    updatePosts
} from "../controllers/postController.js"

const router = express.Router()

router.get("/getPosts", getAllPosts)
router.post("/addPosts", addPosts)
router.delete("/deletePost/:id", deletePosts)
router.patch("/updatePost/:id", updatePosts)


export default router
