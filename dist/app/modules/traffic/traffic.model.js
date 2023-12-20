"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Traffic = void 0;
const mongoose_1 = require("mongoose");
const trafficSchema = new mongoose_1.Schema({
    users: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Traffic = (0, mongoose_1.model)('Traffic', trafficSchema);
