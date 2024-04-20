import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
dotenv.config()

const app = express();
app.use(express.json())

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("db connection established")

    app.listen(process.env.PORT,()=>{
        console.log(`server running on port ${process.env.PORT}`)
    })
}).catch(()=>{
    console.log("db connection failed")
})

app.use("/api/user", userRouter)
app.use("/api/auth",authRouter)
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";
    return res
    .status(statusCode)
    .json({
        success: false,
        statusCode,
        message,
    })

})