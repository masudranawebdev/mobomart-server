"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissionService = void 0;
const mission_model_1 = require("./mission.model");
const insertIntoDB = async (data) => {
    const result = await mission_model_1.Mission.create(data);
    return result;
};
const getAllData = async () => {
    const result = await mission_model_1.Mission.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await mission_model_1.Mission.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await mission_model_1.Mission.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await mission_model_1.Mission.deleteOne({ _id: id });
    return result;
};
exports.MissionService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
