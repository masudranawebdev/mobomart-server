"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideMapService = void 0;
const sideMap_model_1 = require("./sideMap.model");
const insertIntoDB = async (data) => {
    const existingSideMap = await sideMap_model_1.SideMap.find({});
    if (existingSideMap.length === 0) {
        const result = await sideMap_model_1.SideMap.create(data);
        return result;
    }
    else {
        const sideMap = existingSideMap[0];
        const { id } = sideMap;
        const filter = { _id: id };
        const update = data;
        const options = { new: true };
        const result = await sideMap_model_1.SideMap.findOneAndUpdate(filter, update, options);
        return result;
    }
};
const getAllData = async () => {
    const result = await sideMap_model_1.SideMap.find({});
    return result;
};
exports.SideMapService = {
    insertIntoDB,
    getAllData,
};
