"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideMap = void 0;
const mongoose_1 = require("mongoose");
// Define the location schema
const LocationSchema = new mongoose_1.Schema({
    subtitle: { type: String, required: true },
    locations: { type: [String], required: true },
});
// Define the sideMapData schema
const SideMapDataSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    locationData: { type: [LocationSchema], required: true },
});
// Define the main sideMap schema
const SideMapSchema = new mongoose_1.Schema({
    sideMapData: { type: [SideMapDataSchema], required: true },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.SideMap = (0, mongoose_1.model)('SideMap', SideMapSchema);
