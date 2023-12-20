"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaHead = void 0;
const mongoose_1 = require("mongoose");
const MetaHeadSchema = new mongoose_1.Schema({
    metaTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
    metaKeyword: { type: [String], required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.MetaHead = (0, mongoose_1.model)('MetaHead', MetaHeadSchema);
