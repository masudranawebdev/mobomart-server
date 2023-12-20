"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaService = void 0;
const area_model_1 = require("./area.model");
const insertIntoDB = async (data) => {
    const existingArea = await area_model_1.Area.find({});
    if (existingArea.length === 0) {
        const result = await area_model_1.Area.create(data);
        return result;
    }
    else {
        const area = existingArea[0];
        const { _id } = area;
        const filter = { _id };
        const update = data;
        const options = { new: true };
        const result = await area_model_1.Area.findOneAndUpdate(filter, update, options);
        return result;
    }
};
const getAllData = async () => {
    const result = await area_model_1.Area.find({});
    return result;
};
exports.AreaService = {
    insertIntoDB,
    getAllData,
};
