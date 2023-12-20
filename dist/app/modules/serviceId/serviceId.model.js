"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceId = void 0;
const mongoose_1 = require("mongoose");
const ServiceIdSchema = new mongoose_1.Schema({
    ids: { type: [String], required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.ServiceId = (0, mongoose_1.model)('ServiceId', ServiceIdSchema);
