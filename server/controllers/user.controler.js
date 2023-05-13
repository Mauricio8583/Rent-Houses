import User from "../models/user.module.js"
import jwt from "jsonwebtoken"

export const deleteUser = async (req, res) => {

    const user = await User.findOne({_id: req.params.id});
    const token = req.cookies.access_token
    if(!token) return res.status(401).send("You are not allowed");
    
    
    jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {

        if(payload.id !== user._id.toString()){
            return res.status(401).send("You can delete only your own user")
        }
        
    })   
    

    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User deleted!")
    
}