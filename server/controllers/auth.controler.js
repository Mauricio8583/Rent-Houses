import User from "../models/user.module.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import createError from "../utils/createError.js";

export const register = async (req, res, next) => {
    try{
        const hashedPassword = bcrypt.hashSync(req.body.password, 5);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            country: req.body.country
        });

        await newUser.save();
        res.status(201).send("User created")
    }catch(err){
        next(err)
    }

}

export const login = async (req, res, next) => {
    try{
        const user = await User.findOne({username: req.body.username});
       
                        
        if(!user) return next(createError(404, "User not found"))

        const isCorrect = bcrypt.compareSync(req.body.password, user.password)

        if(!isCorrect) return next(createError(400, "Invalid password"))

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller
        }, process.env.JWT_KEY)

        const {password, ...info} = user._doc;
        res.cookie("access_token", token, { httpOnly: true}).status(200).send(info);        

    }catch(err){
        next(err);                    
    }
}

export const logout = async (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true,
    }).status(200).send("User has been logged out");
}