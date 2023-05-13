import User from "../models/user.module.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
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
        res.status(500).send("Something went wrong")
    }

}

export const login = async (req, res) => {
    try{
        const user = await User.findOne({username: req.body.username});
                        
        if(!user) return res.status(404).send("User not found")

        const isCorrect = bcrypt.compareSync(req.body.password, user.password)

        if(!isCorrect) return res.status(400).send("Invalid password or username")

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller
        }, process.env.JWT_KEY)

        const {password, ...info} = user._doc;
        res.cookie("access_token", token, { httpOnly: true}).status(200).send(info);        

    }catch(err){
        res.status(500).send("Something went wrong")                      
    }
}