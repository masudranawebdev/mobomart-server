"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewHeadService = void 0;
const reviewHead_model_1 = require("./reviewHead.model");
const insertIntoDB = async (data) => {
    const result = await reviewHead_model_1.ReviewHead.create(data);
    return result;
};
const getAllData = async () => {
    const result = await reviewHead_model_1.ReviewHead.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await reviewHead_model_1.ReviewHead.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await reviewHead_model_1.ReviewHead.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await reviewHead_model_1.ReviewHead.deleteOne({ _id: id });
    return result;
};
exports.ReviewHeadService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
