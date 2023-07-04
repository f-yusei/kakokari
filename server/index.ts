import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app: express.Express = express();
const PORT: number = 3300
dotenv.config()

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


app.listen(PORT, () => {
    console.log("ローカルサーバー起動中")
})