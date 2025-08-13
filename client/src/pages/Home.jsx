import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import BlogCard from '../components/BlogCard'
import AddBlog from '../components/AddBlog'

const Home = () => {
  const [blogs,setBlogs] = useState([])

  const getData = async ()=>{
    const res = await axios.get('http://localhost:3000/blogs')
    console.log(res.data)
    setBlogs(res.data.blogs)
  }

  useEffect(()=>{
    getData()
  },[blogs])

  if(!blogs) return <div>Loading...</div>
  return (
    <div>
      <AddBlog/>
      <div className="blogs grid grid-cols-4 gap-6">
        {blogs.map((blog)=>(
        <BlogCard _id={blog._id} key={blog._id} title={blog.title} description={blog.description} image={blog.image}/>
      ))}
      </div>
    </div>
  )
}

export default Home