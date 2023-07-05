"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_js_1 = __importDefault(require("crypto-js"));
const JWT = require("jsonwebtoken");
const User = require("../models/user");
exports.register = async (req, res) => {
    const password = req.body.password;
    try {
        // password hash by AES
        req.body.password = crypto_js_1.default.AES.encrypt(password, process.env.SECRET_KEY || "").toString();
        const user = await User.create(req.body);
        //JWTの発行
        const accessToken = JWT.sign({
            id: user._id,
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: "24h",
        });
        return res.status(200).json({ user, accessToken });
    }
    catch (err) {
        return res.status(500).json(err);
    }
};
exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        // ユーザー名が一致するユーザーを検索
        const user = await User.findOne({ username: username });
        if (!user) {
            res.status(401).json({
                errors: {
                    param: "username",
                    message: "ユーザー名が一致しません。",
                }
            });
        }
        // パスワードの復号化
        const decryptedPassword = crypto_js_1.default.AES.decrypt(user.password, process.env.SECRET_KEY || "").toString(crypto_js_1.default.enc.Utf8);
        if (decryptedPassword !== password) {
            return res.status(401).json({
                errors: {
                    param: "password",
                    message: "パスワードが無効です",
                }
            });
        }
        //JWTの発行
        const accessToken = JWT.sign({
            id: user._id,
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: "24h",
        });
        return res.status(201).json({ user, accessToken });
    }
    catch (err) {
        return res.status(500).json(err);
    }
};
//# sourceMappingURL=user.js.map