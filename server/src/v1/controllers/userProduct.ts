import express, { Request, Response } from 'express';
const UserProduct = require("../models/userProduct");
import { Document } from 'mongoose';

interface IUserProduct extends Document {
    seller: string;
    title: string;
    grade: number;
    department: string;
    subject: string;
    year: number;
    semester: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}


interface IRequest extends Request {
    user?: {
        _id: string;
    };
}

exports.exhibit = async (req: IRequest, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json("権限がありません")
        }
        const userProduct: IUserProduct = await UserProduct.create({
            seller: req.user._id,
            title: req.body.title,
            grade: req.body.grade,
            department: req.body.department,
            subject: req.body.subject,
            year: req.body.year,
            semester: req.body.semester,
            description: req.body.description,
        });
        return res.status(200).json({ userProduct });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
exports.getAllProducts = async (req: IRequest, res: Response) => {
    try {
        const userProducts: IUserProduct[] = await UserProduct.find({ seller: req.user?._id }).sort({ createdAt: -1 });
        return res.status(200).json({ userProducts });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};