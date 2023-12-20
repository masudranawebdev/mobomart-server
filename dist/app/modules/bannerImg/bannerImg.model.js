"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerImg = void 0;
const mongoose_1 = require("mongoose");
const BannerImgSchema = new mongoose_1.Schema({
    serviceImg: { type: String, required: true },
    aboutImg: { type: String, required: true },
    movingImg: { type: String, required: true },
    videoImg: { type: String, required: true },
    blogImg: { type: String, required: true },
    contactImg: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.BannerImg = (0, mongoose_1.model)('BannerImg', BannerImgSchema);
