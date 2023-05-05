import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express();

dotenv.config()

mongoose.set("strictQuery", true);

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
     }catch(err){
         console.log(err)
     }
}

app.listen(8000, () => {
    connect()
    console.log("BackEnd is running on 8000")
})