"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Privecy = void 0;
const mongoose_1 = require("mongoose");
const PrivecySchema = new mongoose_1.Schema({
    content: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Privecy = (0, mongoose_1.model)('Privecy', PrivecySchema);
