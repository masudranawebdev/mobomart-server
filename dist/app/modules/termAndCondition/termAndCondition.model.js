"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermAndCondition = void 0;
const mongoose_1 = require("mongoose");
const TermAndConditionSchema = new mongoose_1.Schema({
    content: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.TermAndCondition = (0, mongoose_1.model)('TermAndCondition', TermAndConditionSchema);
