import axios from 'axios'
import React from 'react'

const BlogCard = ({_id,title,description,image}) => {

  const handleDelete = async (_id) =>{
    const res = await axios.delete(`http://localhost:3000/blogs/delete`,{data:{_id}})
    console.log(res)
    window.reload()
  }
  return (
    <div className='flex flex-col gap-y-4 p-8 bg-gray-100 w-fit m-2 rounded-sm max-h-[300px] overflow-y-scroll'>
          <img src={image} alt={title} height={100} width={100} className='self-center'/>
          <h1 className='text-2xl'>{title}</h1>
          <p className='text-sm'>{description}</p>
          <button onClick={()=>handleDelete(_id)} className='btn-secondary'>Delete</button>
    </div>
  )
}

export default BlogCard