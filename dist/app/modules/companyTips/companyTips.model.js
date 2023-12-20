"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyTip = void 0;
const mongoose_1 = require("mongoose");
const CompanyTipsSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    content: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.CompanyTip = (0, mongoose_1.model)('CompanyTip', CompanyTipsSchema);
