"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mission = void 0;
const mongoose_1 = require("mongoose");
const MissionSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    menu: { type: String, required: true },
    content: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Mission = (0, mongoose_1.model)('Mission', MissionSchema);
