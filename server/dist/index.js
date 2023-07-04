"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = 3300;
const uri = "mongodb+srv://fkys2932:C4y0iGGwGTdwZtNO@cluster0.ysqni7b.mongodb.net/?retryWrites=true&w=majority";
try {
    mongoose_1.default.connect(uri);
}
catch (err) {
    console.log(err);
}
app.listen(PORT, () => {
    console.log("ローカルサーバー起動中");
});
//# sourceMappingURL=index.js.map