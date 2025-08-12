import axios from 'axios';

export const RegisterUser = async(data) =>{
    try{
        const response = await axios.post("http://localhost:3000/users",data)
        console.log(response)
    }catch(e){
        console.log(e.message)
    }
}

export const LoginUser = async(data) =>{
    try{
        const response = await axios.get("http://localhost:3000/users",data)
        console.log(response)
    }catch(e){
        console.log(e.message)
    }
}
export default {RegisterUser};

