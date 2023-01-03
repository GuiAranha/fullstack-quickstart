"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class handleError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
        this.status = status;
        this.message = message;
    }
}
exports.default = handleError;
