import express from 'express'

const app =express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.send("Hello from home !")
})

app.listen(3000,()=>{
    console.log('App running on port 3000')
})