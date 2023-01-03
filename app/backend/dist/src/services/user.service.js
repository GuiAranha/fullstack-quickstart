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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../database/models/user.model"));
const handleError_1 = __importDefault(require("../helpers/handleError"));
const hashPassword_1 = require("../helpers/hashPassword");
const jwt_1 = __importDefault(require("../helpers/jwt"));
const Joi = __importStar(require("joi"));
class UserService {
    constructor(model = user_model_1.default) {
        this.model = model;
        this.model = model;
    }
}
exports.default = UserService;
_a = UserService;
UserService.createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6),
    });
    const { error } = schema.validate(user);
    if (error) {
        throw new handleError_1.default(404, 'Missing fields');
    }
    const found = yield user_model_1.default.findOne({ where: { email: user.email } });
    if (found) {
        throw new handleError_1.default(409, 'Conflict');
    }
    const hash = (0, hashPassword_1.encryptPassword)(user.password);
    yield user_model_1.default.create(Object.assign(Object.assign({}, user), { password: hash }));
    const data = jwt_1.default.generateToken(user);
    return data;
});
