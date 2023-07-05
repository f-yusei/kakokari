"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const dotenv_1 = __importDefault(require("dotenv"));
const express_validator_1 = require("express-validator");
const User = require("../models/user");
const JWT = require("jsonwebtoken");
const validation = require("../handlers/validation");
const userController = require("../controllers/user");
const tokenHandler = require("../handlers/tokenHandler");
dotenv_1.default.config();
router.post("/register", (0, express_validator_1.body)("username")
    .isLength({ min: 5 })
    .withMessage("ユーザー名は5文字以上で入力してください。"), (0, express_validator_1.body)("password")
    .isLength({ min: 8 })
    .withMessage("パスワードは8文字以上で入力してください。"), (0, express_validator_1.body)("confirmPassword")
    .isLength({ min: 8 })
    .withMessage("確認用パスワードは8文字以上で入力してください。"), (0, express_validator_1.body)("username").custom(async (value) => {
    return await User.findOne({ username: value }).then((user) => {
        if (user) {
            return Promise.reject("ユーザー名は既に使用されています。");
        }
    });
}), validation.validate, userController.register);
//ログインAPI
router.post("/login", (0, express_validator_1.body)("username")
    .isLength({ min: 5 })
    .withMessage("ユーザー名は5文字以上で入力してください。"), (0, express_validator_1.body)("password")
    .isLength({ min: 8 })
    .withMessage("パスワードは8文字以上で入力してください。"), validation.validate, userController.login);
//JWT認証API
router.post("/verify-token", tokenHandler.verifyToken, async (req, res) => {
    return res.status(200).json({ user: req.body.user });
});
module.exports = router;
//# sourceMappingURL=auth.js.map