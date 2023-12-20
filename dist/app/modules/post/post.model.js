"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, unique: true, required: true },
    content: { type: String, required: true },
    tags: { type: [String], required: true },
    metaTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
    metaKeyword: { type: [String], required: true },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Category' },
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Post = (0, mongoose_1.model)('Post', PostSchema);
