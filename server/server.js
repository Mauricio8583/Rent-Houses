import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"
import cookieParser from "cookie-parser"

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

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/users/auth", authRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    
    return res.status(errorStatus).send(errorMessage)
})

app.listen(8000, () => {
    connect()
    console.log("BackEnd is running on 8000")
})