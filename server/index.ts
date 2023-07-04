import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import CryptoJS from "crypto-js";
import User from "./src/v1/models/user";
const app: express.Express = express();
const PORT: number = 3300
dotenv.config()

app.listen(PORT, () => {
    console.log("ローカルサーバー起動中")
})

try {
    if (process.env.MONGO_URL) {
        mongoose.connect(process.env.MONGO_URL);
        console.log("DB接続中")
    } else {
        console.error("MONGO_URL is not defined in the environment variables.");
    }
} catch (err) {
    console.log(err)
}


app.post("/register", (req, res) => {
    const password = req.body.password;

    try {
        // password hash by AES
        req.body.password = CryptoJS.AES.encrypt(
            password,
            process.env.SECRET_KEY || ""
        ).toString();
        const user = await Use

    } catch (err) {
        console.log(err)
    }
});