"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi = __importStar(require("joi"));
const jwt_1 = __importDefault(require("../helpers/jwt"));
const user_model_1 = __importDefault(require("../database/models/user.model"));
const handleError_1 = __importDefault(require("../helpers/handleError"));
class LoginService {
    constructor(model = user_model_1.default) {
        this.model = model;
        this.model = model;
    }
    static validateLogin(email, password) {
        const schema = joi.object({
            email: joi.string().required().email(),
            password: joi.string().required().min(6),
        }).validate({ email, password });
        if (schema.error) {
            console.log(schema.error.message);
            throw new handleError_1.default(400, 'All fields must be filled');
        }
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            LoginService.validateLogin(email, password);
            // console.log(LoginService.validateLogin(email, password));
            const data = yield this.model.findOne({ where: { email } });
            if (!data)
                throw new handleError_1.default(401, 'Incorrect email or password');
            const token = jwt_1.default.generateToken(data);
            return token;
        });
    }
}
exports.default = LoginService;
