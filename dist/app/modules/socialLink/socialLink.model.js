"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Social = void 0;
const mongoose_1 = require("mongoose");
const SocialLinkSchema = new mongoose_1.Schema({
    whatsappLink: { type: String, required: true },
    facebookLink: { type: String, required: true },
    twitterLink: { type: String, required: true },
    linkedinLink: { type: String, required: true },
    youtubeLink: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Social = (0, mongoose_1.model)('Social', SocialLinkSchema);
