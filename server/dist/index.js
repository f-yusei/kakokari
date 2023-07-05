"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const PORT = 3300;
dotenv_1.default.config();
app.use(express_1.default.json());
app.use("/api/v1", require("./src/v1/routes/auth"));
app.listen(PORT, () => {
    console.log("ローカルサーバー起動中");
});
try {
    if (process.env.MONGO_URL) {
        mongoose_1.default.connect(process.env.MONGO_URL);
        console.log("DB接続中");
    }
    else {
        console.error("MONGO_URL is not defined in the environment variables.");
    }
}
catch (err) {
    console.log(err);
}
//# sourceMappingURL=index.js.map