"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientHeadService = void 0;
const clientHead_model_1 = require("./clientHead.model");
const insertIntoDB = async (data) => {
    const result = await clientHead_model_1.ClientHead.create(data);
    return result;
};
const getAllData = async () => {
    const result = await clientHead_model_1.ClientHead.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await clientHead_model_1.ClientHead.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await clientHead_model_1.ClientHead.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await clientHead_model_1.ClientHead.deleteOne({ _id: id });
    return result;
};
exports.ClientHeadService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
