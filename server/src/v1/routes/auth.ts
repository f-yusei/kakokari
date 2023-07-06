const router = require("express").Router();
import express from 'express';
import dotenv from 'dotenv';
import { body, validationResult } from 'express-validator';

const User = require("../models/user");
const JWT = require("jsonwebtoken");
const validation = require("../handlers/validation");
const userController = require("../controllers/user");
const tokenHandler = require("../handlers/tokenHandler");

dotenv.config()


router.post(
    "/register",
    body("email")
        .isEmail(),
    body("username")
        .isLength({ min: 5 })
        .withMessage("ユーザー名は5文字以上で入力してください。"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("パスワードは8文字以上で入力してください。"),
    body("confirmPassword")
        .isLength({ min: 8 })
        .withMessage("確認用パスワードは8文字以上で入力してください。"),
    body("email").custom(async (value) => {
        return await User.findOne({ email: value }).then((user: any) => {
            if (user) {
                return Promise.reject("このメールアドレスは既に登録されています。");
            }
        })
    }),
    validation.validate,
    userController.register
);

//メールログインAPI
router.post(
    "/login",

    body("email")
        .isEmail(),
    body("password")
        .isLength({ min: 8 })
        .withMessage("パスワードは8文字以上で入力してください。"),
    validation.validate,
    userController.login
)

//ユーザーネームログインAPI
router.post(
    "/login-username",

    body("username")
        .isLength({ min: 5 })
        .withMessage("ユーザー名は5文字以上で入力してください。"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("パスワードは8文字以上で入力してください。"),
    validation.validate,
    userController.loginUsername
)

//JWT認証API
router.post(
    "/verify-token",
    tokenHandler.verifyToken,
    async (req: any, res: express.Response) => {
        return res.status(200).json({ user: req.user });
    });

module.exports = router;