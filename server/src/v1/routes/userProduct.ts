const router = require("express").Router();
import express from 'express';
import dotenv from 'dotenv';
const userProductController = require("../controllers/userProduct");
import { body } from 'express-validator';
const validation = require("../handlers/validation");
const verifyToken = require("../handlers/tokenHandler");
dotenv.config()

//過去問を出品するAPI
router.post(
    "/exhibit",
    body("title")
        .isLength({ min: 1 })
        .withMessage("タイトルを入力してください。"),
    body("grade")
        .isLength({ min: 1 })
        .withMessage("学年を入力してください。"),
    body("department")
        .isLength({ min: 1 })
        .withMessage("学科を入力してください。"),
    body("subject")
        .isLength({ min: 1 })
        .withMessage("科目を入力してください。"),
    body("year")
        .isLength({ min: 1 })
        .withMessage("年度を入力してください。"),
    body("semester")
        .isLength({ min: 1 })
        .withMessage("学期を入力してください。"),
    body("description")
        .isLength({ min: 1 })
        .withMessage("説明を入力してください。"),
    validation.validate,
    verifyToken.verifyToken,
    userProductController.exhibit
);

//過去問を全て取得するAPI
router.get(
    "/getAllProducts",
    userProductController.getAllProducts
);

//ログインユーザーの出品した過去問を取得するAPI
router.get(
    "/getLoginUserProducts",
    verifyToken.verifyToken,
    userProductController.getAllProducts
);


module.exports = router;