const router = require("express").Router();
import express from 'express';
import dotenv from 'dotenv';
const pastExamController = require("../controllers/pastExam");
const tokenHandler = require("../handlers/tokenHandler");

dotenv.config()

//過去問を出品するAPI
router.post("/", tokenHandler.verifyToken, pastExamController.create);

module.exports = router;