import axios from 'axios'
import React from 'react'
import {useForm} from 'react-hook-form'

const AddBlog = () => {

const{register,handleSubmit} = useForm()

const onSubmit = async (data)=>{
    const res = await axios.post('http://localhost:3000/blogs/create',data)
    console.log(res)
}

  return (
    <form className='flex flex-col gap-y-4 bg-blue-400 p-8 w-[400px] text-white rounded-lg shadow-xl' onSubmit={handleSubmit(onSubmit)}>
        <label className='label'>Title</label>
        <input type="text" className='input-primary'{...register("title")}/>
        <label>Description</label>
        <textarea type="text" className='input-primary' {...register("description")}/>
        <label>Image</label>
        <input type="text" className='input-primary' {...register("image")}/>
        <button className='btn-secondary' type='submit'>Add Blog</button>
    </form>
  )
}

export default AddBlog