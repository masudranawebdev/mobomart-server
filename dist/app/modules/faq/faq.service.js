"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqService = void 0;
const faq_model_1 = require("./faq.model");
const insertIntoDB = async (data) => {
    const result = await faq_model_1.Faq.create(data);
    return result;
};
const getAllData = async () => {
    const result = await faq_model_1.Faq.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await faq_model_1.Faq.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await faq_model_1.Faq.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await faq_model_1.Faq.deleteOne({ _id: id });
    return result;
};
exports.FaqService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
