"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteService = void 0;
const quote_model_1 = require("./quote.model");
const insertIntoDB = async (data) => {
    const result = await quote_model_1.Quote.create(data);
    return result;
};
const getAllData = async () => {
    const result = await quote_model_1.Quote.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await quote_model_1.Quote.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await quote_model_1.Quote.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await quote_model_1.Quote.deleteOne({ _id: id });
    return result;
};
exports.QuoteService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
