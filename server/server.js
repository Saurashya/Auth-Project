import express from 'express'
import connectDB from './config/dbConnect.js'
import userRoute from './routes/userRoute.js'
import blogRoute from './routes/blogRoute.js'
import cors from 'cors'

const app =express()

connectDB()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Hello from home !")
})

app.use('/users',userRoute)
app.use('/blogs',blogRoute)

app.listen(3000,()=>{
    console.log('App running on port 3000')
})