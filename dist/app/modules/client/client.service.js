"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientService = void 0;
const client_model_1 = require("./client.model");
const insertIntoDB = async (data) => {
    const result = await client_model_1.Client.create(data);
    return result;
};
const getAllData = async () => {
    const result = await client_model_1.Client.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await client_model_1.Client.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await client_model_1.Client.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await client_model_1.Client.deleteOne({ _id: id });
    return result;
};
exports.ClientService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
