import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"

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

app.use("/api/users", userRoute);
app.use("/api/users/auth", authRoute);

app.listen(8000, () => {
    connect()
    console.log("BackEnd is running on 8000")
})