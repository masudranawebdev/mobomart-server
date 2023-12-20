"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Area = void 0;
const mongoose_1 = require("mongoose");
const AreaSchema = new mongoose_1.Schema({
    location: { type: [String], required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Area = (0, mongoose_1.model)('Area', AreaSchema);
