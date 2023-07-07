import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';



const app: express.Express = express();
const PORT: number = 3300
dotenv.config()

app.use(cors({
    origin: "http://localhost:3000",
}));
app.use(express.json());
app.use("/api/v1", require("./src/v1/routes"));

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


