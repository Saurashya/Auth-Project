import mongoose from 'mongoose'

export default async function connectDB(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/auth").then(()=>{console.log("DB connected sucessfully")})
    }catch(e){
        console.log(e.message)
    }
}