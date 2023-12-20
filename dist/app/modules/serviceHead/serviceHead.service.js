"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceHeadService = void 0;
const serviceHead_model_1 = require("./serviceHead.model");
const insertIntoDB = async (data) => {
    const result = await serviceHead_model_1.ServiceHead.create(data);
    return result;
};
const getAllData = async () => {
    const result = await serviceHead_model_1.ServiceHead.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await serviceHead_model_1.ServiceHead.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await serviceHead_model_1.ServiceHead.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await serviceHead_model_1.ServiceHead.deleteOne({ _id: id });
    return result;
};
exports.ServiceHeadService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
