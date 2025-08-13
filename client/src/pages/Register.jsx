import React from 'react'
import { z } from 'zod'
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {RegisterUser} from '../api/useRegister'

const userSchema = z.object({
    email:z.string().min(3).max(32).nonempty("Email is required").email(),
    password:z.string().min(3).max(32).nonempty("Password is required")
})

const Register = () => {
    const {register,handleSubmit,formState:{errors}} = useForm({resolver:zodResolver(userSchema)})

    const handleRegister = (data)=>{
        RegisterUser(data)
    }
  return (
    <div className='w-full h-screen flex-center bg-[#fafafa]'>
      <form onSubmit={handleSubmit(handleRegister)} className='flex flex-col gap-y-4 bg-blue-400 p-8 w-[400px] text-white rounded-lg shadow-xl'>
        <h1 className='text-2xl'>Register User</h1>
        <label className='label'>Email</label>
        <input type="text" placeholder='Enter your email' {...register("email")} className='input-primary'/>
        {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
        <br />
        <label className='label'>Password</label>
        <input type="password" placeholder='Enter your password' {...register("password")} className='input-primary'/>
        {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
        <button type='submit' className='btn-primary'>Register</button>
    </form>
    </div>
  )
}
export default Register