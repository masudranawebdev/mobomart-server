"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.About = void 0;
const mongoose_1 = require("mongoose");
const AboutSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    images: { type: [String], required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.About = (0, mongoose_1.model)('About', AboutSchema);
