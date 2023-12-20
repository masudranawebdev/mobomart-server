"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovingTip = void 0;
const mongoose_1 = require("mongoose");
const MovingTipsSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    thumbnail: { type: String, required: true },
    content: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.MovingTip = (0, mongoose_1.model)('MovingTip', MovingTipsSchema);
