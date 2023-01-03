"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = __importDefault(require("../helpers/jwt"));
const tokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        throw new Error;
        // return res.status(401).json({ message: 'Token must be a valid token' });
    }
    const { data } = jwt_1.default.validateToken(token);
    req.body.user = data;
    next();
};
exports.default = tokenMiddleware;
