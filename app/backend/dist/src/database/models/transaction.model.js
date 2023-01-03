"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Transaction extends sequelize_1.Model {
}
Transaction.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    debitedAccountId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    creditedAccountId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    value: {
        type: sequelize_1.NUMBER,
        allowNull: false,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    timestamps: true,
    createdAt: true,
    updatedAt: false,
    modelName: 'transaction',
});
exports.default = Transaction;
