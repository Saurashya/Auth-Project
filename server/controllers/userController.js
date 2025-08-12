import User from "../models/userModel.js"
import bcrypt from "bcrypt"

const getUser = async (req,res) => {
   const {email,password} = req.body
    const userExists = await User.findOne({email})
    if(userExists){
        const isValid = await bcrypt.compare(password,userExists.password)
        if(isValid){
            res.status(200).json({message:"User logged in successfully",user:userExists})
        }else{
            res.status(401).json({message:"Invalid credentials"})
        }
        }
    else{
        res.status(404).json({message:"User not found"})
    }
    }
        

const createUser = async (req,res) => {
    const {email,password} = req.body
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    try{
        const user = new User({email,password:hashedPassword})
        await user.save()
        res.status(201).json({message:"User created successfully",user})
    }catch(e){
        res.status(400).json({message:e.message})
    } 
}

const updateUser = async (req, res) => {
  const { email, password, newPassword } = req.body;
try{
    const user = await User.findOne({email})
    if(!user){
        res.status(404).json({message:"User not found"})
    }
    const isMatched = await bcrypt.compare(password,user.password)
    if(!isMatched) {return res.status(401).json({message:"Invalid credentials"})}

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(newPassword,salt)
    await User.updateOne({email},{password:hashedPassword})
    res.status(201).send({message:"Password updated successfully"})
}
catch(e){
    res.status(400).json({message:e.message})
}
};


const deleteUser = async (req,res) => {
    const {_id} = req.body
    try{
    const user = await User.findOne({_id})
    if(!user){
        res.status(404).json({message:"User not found"})
    }
    await User.deleteOne({_id})
    res.status(200).json({message:"User deleted successfully"})
    }
    catch(e){
        res.status(400).json({message:e.message})
    }
}

export default {getUser,createUser,updateUser,deleteUser}