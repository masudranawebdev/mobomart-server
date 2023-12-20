"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
const mongoose_1 = require("mongoose");
const BannerSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    subTitleOne: { type: String, required: true },
    subTitleTwo: { type: String, required: true },
    content: { type: String, required: true },
    thumbnail: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Banner = (0, mongoose_1.model)('Banner', BannerSchema);
