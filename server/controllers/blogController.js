import Blog from "../models/blogModel.js";

const createBlog = async(req,res)=>{
    const {title,description,image} = req.body
    try{
        if(!title || !description || !image){
            return res.status(400).json({message:"All fields are required"})
        }
        const blog = new Blog({title,description,image})
        await blog.save()
        res.status(201).json({message:"Blog created successfully",blog})
    }catch(e){
        res.status(400).json({message:e.message})
    }
}

const getAllBlogs = async(req,res)=>{
    try{
        const blogs = await Blog.find()
        res.status(200).json({message:"Blogs fetched successfully",blogs})
    }catch(e){
        res.status(400).json({message:e.message})
    }
}

const deleteBlogs = async(req,res)=>{
    const{_id} = req.body
    try{
        const blog = await Blog.findOne({_id})
        if(!blog){
            return res.status(404).json({message:"Blog not found"})
        }
        await Blog.deleteOne({_id})
        res.status(200).json({message:"Blog deleted successfully"})
    }catch(e){
        res.status(400).json({message:e.message})
    }
}

export default {createBlog,getAllBlogs,deleteBlogs}