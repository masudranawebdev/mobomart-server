"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const message_model_1 = require("./message.model");
const insertIntoDB = async (data) => {
    const result = await message_model_1.Message.create(data);
    return result;
};
const getAllData = async () => {
    const result = await message_model_1.Message.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await message_model_1.Message.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await message_model_1.Message.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await message_model_1.Message.deleteOne({ _id: id });
    return result;
};
exports.MessageService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
