import mongoose from "mongoose";
import postModel from "../models/postModels.js";

//get all post
export const getAllPosts = async(req,res)=>{
    try{
        const posts = await postModel.find({})
        res.status(200).json(posts)
    }catch(error){
        res.status(500).json({message:"something went wrong"})
    }
}
 //add new post
export const addPosts = async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    try {
        const newPost = await postModel.create({ title, content });
        res.status(201).json({ message: "Post created successfully", newPost });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
//delete psost with id
export const deletePosts = async (req,res)=>{
    try{
        const id = req.params.id
    const deletedPost = await postModel.findByIdAndDelete(id)
    res.status(200).json({mesage:"post deleted",deletedPost})
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}

// post update

export const updatePosts = async(req,res)=>{
    try{
        const id = req.params.id
    const data = req.body
    const updatedPost = await postModel.findByIdAndUpdate(id,data,{new:true, upsert: true})
    res.status(200).json({message:"post updated succsessfully",updatedPost})
    }catch(error){
        res.status(500).json({ error: error.message })
    }
}