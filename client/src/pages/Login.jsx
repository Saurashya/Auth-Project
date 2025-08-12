import { z } from 'zod'
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { LoginUser } from '../api/useRegister'

const userSchema = z.object({
    email:z.string().min(3).max(32).nonempty("Email is required").email(),
    password:z.string().min(3).max(32).nonempty("Password is required")
})

const Login = () => {
    const {register,handleSubmit,formState:{errors}} = useForm({resolver:zodResolver(userSchema)})

    const handleLogin = (data)=>{
        LoginUser(data)
    }
  return (
    <form onSubmit={handleSubmit(handleLogin)}>
        <h1>Login User</h1>
        <label>Email</label>
        <input type="text" placeholder='Enter your email' {...register("email")}/>
        {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
        <br />
        <label>Password</label>
        <input type="password" placeholder='Enter your password' {...register("password")}/>
        {errors.password && <p style={{color:"red"}}>{errors.password.message}</p>}
        <button type='submit'>Login</button>
    </form>
  )
}

export default Login