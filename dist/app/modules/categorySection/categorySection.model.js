"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySection = void 0;
const mongoose_1 = require("mongoose");
const CategorySectionSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    icon: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.CategorySection = (0, mongoose_1.model)('CategorySection', CategorySectionSchema);
