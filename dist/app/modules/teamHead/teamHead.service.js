"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamHeadService = void 0;
const teamHead_model_1 = require("./teamHead.model");
const insertIntoDB = async (data) => {
    const result = await teamHead_model_1.TeamHead.create(data);
    return result;
};
const getAllData = async () => {
    const result = await teamHead_model_1.TeamHead.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await teamHead_model_1.TeamHead.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await teamHead_model_1.TeamHead.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await teamHead_model_1.TeamHead.deleteOne({ _id: id });
    return result;
};
exports.TeamHeadService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
