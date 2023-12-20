"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogHeadService = void 0;
const blogHead_model_1 = require("./blogHead.model");
const insertIntoDB = async (data) => {
    const result = await blogHead_model_1.BlogHead.create(data);
    return result;
};
const getAllData = async () => {
    const result = await blogHead_model_1.BlogHead.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await blogHead_model_1.BlogHead.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await blogHead_model_1.BlogHead.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await blogHead_model_1.BlogHead.deleteOne({ _id: id });
    return result;
};
exports.BlogHeadService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
