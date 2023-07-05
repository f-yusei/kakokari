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
    body("username")
        .isLength({ min: 5 })
        .withMessage("ユーザー名は5文字以上で入力してください。"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("パスワードは8文字以上で入力してください。"),
    body("confirmPassword")
        .isLength({ min: 8 })
        .withMessage("確認用パスワードは8文字以上で入力してください。"),
    body("username").custom(async (value) => {
        return await User.findOne({ username: value }).then((user: any) => {
            if (user) {
                return Promise.reject("ユーザー名は既に使用されています。");
            }
        })
    }),
    validation.validate,
    userController.register
);

//ログインAPI
router.post(
    "/login",
    body("username")
        .isLength({ min: 5 })
        .withMessage("ユーザー名は5文字以上で入力してください。"),
    body("password")
        .isLength({ min: 8 })
        .withMessage("パスワードは8文字以上で入力してください。"),
    validation.validate,
    userController.login
)

//JWT認証API
router.post(
    "/verify-token",
    tokenHandler.verifyToken,
    async (req: any, res: express.Response) => {
        return res.status(200).json({ user: req.user });
    });

module.exports = router;