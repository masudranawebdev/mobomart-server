"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryHeadService = void 0;
const categoryHead_model_1 = require("./categoryHead.model");
const insertIntoDB = async (data) => {
    const result = await categoryHead_model_1.CategoryHead.create(data);
    return result;
};
const getAllData = async () => {
    const result = await categoryHead_model_1.CategoryHead.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await categoryHead_model_1.CategoryHead.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await categoryHead_model_1.CategoryHead.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await categoryHead_model_1.CategoryHead.deleteOne({ _id: id });
    return result;
};
exports.CategoryHeadService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
