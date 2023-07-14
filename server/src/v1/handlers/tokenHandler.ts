import express, { Request, Response, NextFunction } from 'express';
const JWT = require("jsonwebtoken");
const User = require("../models/user");
const dotenv = require("dotenv");

dotenv.config()


const tokenDecode = (req: express.Request) => {
    const bearerHeader = req.headers["authorization"];
    if (bearerHeader) {
        const bearer = bearerHeader.split(" ")[1];
        try {
            const decodedToken = JWT.verify(bearer, process.env.JWT_SECRET_KEY);
            return decodedToken;
        } catch (err) {
            return false;
        }
    } else {
        return false;
    }
}

exports.verifyToken = async (req: any, res: Response, next: NextFunction) => {
    const decodedToken = tokenDecode(req);
    if (decodedToken) {
        const user = await User.findById(decodedToken.id);
        if (!user) {
            return res.status(401).json("権限がありません")
        }
        req.user = user;
        next();
    } else {
        return res.status(401).json("権限がありません")
    }
};

