import { errorHandler } from "../utils/error.js"
import bcrypt from "bcrypt"
import User from "../models/user.model.js"
export const test = (req,res)=>{
    res.json({
        message:"hi"
    })
}

export const updateUser = async(req,res,next)=>{
    if(req.user.id != req.params.id) return next(errorHandler(401,"Unauthorized"))
        try {
            if(req.body.password){
                req.body.password = await bcrypt.hash(req.body.password,10)
            }

            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:{
                    ussername:req.body.username,
                    email:req.body.email,
                    password: req.body.password,
                    avatr: req.body.avater,
                }
            },{new:true})

            const {password, ...rest} = updatedUser._doc
            res.status(200).json(rest);
        } catch (error) {
            next(error)
        }
}