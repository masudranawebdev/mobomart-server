"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqHead = void 0;
const mongoose_1 = require("mongoose");
const FaqHeadSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.FaqHead = (0, mongoose_1.model)('FaqHead', FaqHeadSchema);
