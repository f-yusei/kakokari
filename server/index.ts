import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import CryptoJS from "crypto-js";
const JWT = require("jsonwebtoken");
const User = require("./src/v1/models/user.ts");
const app: express.Express = express();
const PORT: number = 3300
dotenv.config()

app.use(express.json());

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


app.post("/register", async (req, res) => {
    const password = req.body.password;

    try {
        // password hash by AES
        req.body.password = CryptoJS.AES.encrypt(
            password,
            process.env.SECRET_KEY || ""
        ).toString();
        const user = await User.create(req.body);
        //JWTの発行
        const accessToken = JWT.sign({
            id: user._id,
        },
            process.env.JWT_SECRET_KEY, {
            expiresIn: "24h",
        }
        )
        return res.status(200).json({ user, accessToken });
    } catch (err) {
        return res.status(500).json(err);
    }
});


app.get("/login", async (req, res) => {
    const password = req.body.password;

    try {
        // password hash by AES
        req.body.password = CryptoJS.AES.encrypt(
            password,
            process.env.SECRET_KEY || ""
        ).toString();
        const user = await User.create(req.body);
        //JWTの発行
        const accessToken = JWT.sign({
            id: user._id,
        },
            process.env.JWT_SECRET_KEY, {
            expiresIn: "24h",
        }
        )
        return res.status(200).json({ user, accessToken });
    } catch (err) {
        return res.status(500).json(err);
    }
});