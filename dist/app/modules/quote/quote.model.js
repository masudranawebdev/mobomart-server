"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quote = void 0;
const mongoose_1 = require("mongoose");
const QuoteSchema = new mongoose_1.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    movingType: { type: String, required: true },
    date: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    information: { type: String, required: true },
    contactNo: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Quote = (0, mongoose_1.model)('Quote', QuoteSchema);
