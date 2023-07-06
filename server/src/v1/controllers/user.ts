import express from "express";
import CryptoJS from "crypto-js";

const JWT = require("jsonwebtoken");
const User = require("../models/user");

exports.register = async (req: express.Request, res: express.Response) => {
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
};

exports.login = async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body;

    try {
        // メールアドレスの一致するユーザーを検索
        const user = await User.findOne({ email: email });
        if (!user) {
            res.status(401).json({
                errors: {
                    param: "email",
                    message: "メールアドレスが無効です",
                }
            })
        }
        // パスワードの復号化
        const decryptedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.SECRET_KEY || ""
        ).toString(CryptoJS.enc.Utf8);

        if (decryptedPassword !== password) {
            return res.status(401).json({
                errors: {
                    param: "password",
                    message: "パスワードが無効です",
                }
            })
        }
        //JWTの発行
        const accessToken = JWT.sign({
            id: user._id,
        },
            process.env.JWT_SECRET_KEY, {
            expiresIn: "24h",
        });

        return res.status(201).json({ user, accessToken });
    } catch (err) {
        return res.status(500).json(err);
    }
}


exports.loginUsername = async (req: express.Request, res: express.Response) => {
    const { username, password } = req.body;

    try {
        // メールアドレスの一致するユーザーを検索
        const user = await User.findOne({ username: username });
        if (!user) {
            res.status(401).json({
                errors: {
                    param: "username",
                    message: "ユーザー名が無効です",
                }
            })
        }
        // パスワードの復号化
        const decryptedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.SECRET_KEY || ""
        ).toString(CryptoJS.enc.Utf8);

        if (decryptedPassword !== password) {
            return res.status(401).json({
                errors: {
                    param: "password",
                    message: "パスワードが無効です",
                }
            })
        }
        //JWTの発行
        const accessToken = JWT.sign({
            id: user._id,
        },
            process.env.JWT_SECRET_KEY, {
            expiresIn: "24h",
        });

        return res.status(201).json({ user, accessToken });
    } catch (err) {
        return res.status(500).json(err);
    }
}