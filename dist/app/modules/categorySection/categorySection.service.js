"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySectionService = void 0;
const categorySection_model_1 = require("./categorySection.model");
const insertIntoDB = async (data) => {
    const result = await categorySection_model_1.CategorySection.create(data);
    return result;
};
const getAllData = async () => {
    const result = await categorySection_model_1.CategorySection.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await categorySection_model_1.CategorySection.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await categorySection_model_1.CategorySection.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await categorySection_model_1.CategorySection.deleteOne({ _id: id });
    return result;
};
exports.CategorySectionService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
