"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutService = void 0;
const about_model_1 = require("./about.model");
const insertIntoDB = async (data) => {
    const result = await about_model_1.About.create(data);
    return result;
};
const getAllData = async () => {
    const result = await about_model_1.About.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await about_model_1.About.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await about_model_1.About.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await about_model_1.About.deleteOne({ _id: id });
    return result;
};
exports.AboutService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
