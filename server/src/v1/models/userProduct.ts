import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userProductSchema = new mongoose.Schema({
    seller: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: {
        type: String,
        default: "無題",
        required: true,
    },
    grade: {
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "ここに自由に記入してください",
    },
    year: {
        type: Number,
        required: true,
    },
    //どの学期の試験か
    semester: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,  // createdAtとupdatedAtを自動的に管理
});

module.exports = mongoose.model("UserProduct", userProductSchema);
