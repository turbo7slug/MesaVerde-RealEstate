import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import { errorHandler } from "../utils/error.js";


export const signup = async (req,res,next)=>{
    const {username, email,password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = new User( {username, email,password:hashedPassword});

    try {
        await newUser.save();
        return res
    .status(201)
    .json("user created")
    } catch (error) {
        next(error)
    }
    
}


export const signin = async(req,res,next)=>{
    const {email,password} = req.body;
    try {
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(errorHandler(404,"user not found"));
        }

        const validPassword = await bcrypt.compare(password,validUser.password)
        if(!validPassword){
            return next(errorHandler(401,'wrong credentials'))
        }

        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
        const options ={httpOnly:true}//can set expiration here
        const {password:pass, ...rest} =validUser._doc
        res
        .cookie('access_token',token,options)
        .status(200)
        .json(rest)
    } catch (error) {
        next(error)
    }
}
