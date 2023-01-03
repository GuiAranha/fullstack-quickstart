"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPassword = exports.encryptPassword = void 0;
const handleError_1 = __importDefault(require("./handleError"));
const password_hash_1 = __importDefault(require("password-hash"));
const encryptPassword = (password) => {
    const hashedPassword = password_hash_1.default.generate(password);
    return hashedPassword;
};
exports.encryptPassword = encryptPassword;
const checkPassword = (password, hashedPassword) => {
    const hash = password_hash_1.default.verify(password, hashedPassword);
    if (hash === false) {
        throw new handleError_1.default(401, 'Incorrect password');
    }
};
exports.checkPassword = checkPassword;
