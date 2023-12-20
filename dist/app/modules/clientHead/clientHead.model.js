"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientHead = void 0;
const mongoose_1 = require("mongoose");
const ClientHeadSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.ClientHead = (0, mongoose_1.model)('ClientHead', ClientHeadSchema);
