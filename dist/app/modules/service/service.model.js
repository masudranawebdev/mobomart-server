"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const mongoose_1 = require("mongoose");
const serviceSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String], required: true },
    metaTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
    metaKeyword: { type: [String], required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Service = (0, mongoose_1.model)('Service', serviceSchema);
