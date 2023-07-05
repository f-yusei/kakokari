"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JWT = require("jsonwebtoken");
const User = require("../models/user");
const tokenDecode = (req) => {
    const bearerToken = req.headers["authorization"];
    if (bearerToken) {
        const bearer = bearerToken.split(" ")[1];
        try {
            const decodedToken = JWT.verify(bearer, process.env.JWT_SECRET_KEY);
            return decodedToken;
        }
        catch (err) {
            return false;
        }
    }
};
exports.verifyToken = (req, res, next) => {
    const decodedToken = tokenDecode(req);
    if (decodedToken) {
        const user = User.findById(decodedToken.id);
        if (!user) {
            return res.status(401).json({
                errors: {
                    param: "token",
                    message: "トークンが無効です。",
                }
            });
        }
        req.body.user = user;
        next();
    }
    else {
        return res.status(401).json({
            errors: {
                param: "token",
                message: "トークンが無効です"
            }
        });
    }
};
//# sourceMappingURL=tokenHandler.js.map