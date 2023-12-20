"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const mongoose_1 = require("mongoose");
const CommentSchema = new mongoose_1.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    post: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Post' },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Comment = (0, mongoose_1.model)('Comment', CommentSchema);
