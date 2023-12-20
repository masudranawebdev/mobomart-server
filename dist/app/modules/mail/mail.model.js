"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
const mongoose_1 = require("mongoose");
const MailSchema = new mongoose_1.Schema({
    fullName: { type: String, required: true },
    contactNo: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Mail = (0, mongoose_1.model)('Mail', MailSchema);
