"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMember = void 0;
const mongoose_1 = require("mongoose");
const videoSchema = new mongoose_1.Schema({
    profileImg: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    facebookLink: {
        type: String,
    },
    twitterLink: {
        type: String,
    },
    linkedinLink: {
        type: String,
    },
    youtubeLink: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.TeamMember = (0, mongoose_1.model)('TeamMember', videoSchema);
