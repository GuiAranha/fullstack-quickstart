"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Account extends sequelize_1.Model {
}
Account.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    balance: {
        type: sequelize_1.NUMBER,
        allowNull: false,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    timestamps: false,
    modelName: 'account',
});
exports.default = Account;
