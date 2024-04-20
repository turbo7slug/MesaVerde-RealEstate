import User from "../models/user.model.js"
import bcrypt from "bcrypt"
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
