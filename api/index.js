import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

const app = express();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("db connection established")

    app.listen(process.env.PORT,()=>{
        console.log(`server running on port ${process.env.PORT}`)
    })
}).catch(()=>{
    console.log("db connection failed")
})



