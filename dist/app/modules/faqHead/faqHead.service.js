"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqHeadService = void 0;
const faqHead_model_1 = require("./faqHead.model");
const insertIntoDB = async (data) => {
    const result = await faqHead_model_1.FaqHead.create(data);
    return result;
};
const getAllData = async () => {
    const result = await faqHead_model_1.FaqHead.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await faqHead_model_1.FaqHead.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await faqHead_model_1.FaqHead.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await faqHead_model_1.FaqHead.deleteOne({ _id: id });
    return result;
};
exports.FaqHeadService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
