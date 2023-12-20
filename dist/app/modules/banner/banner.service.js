"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerService = void 0;
const banner_model_1 = require("./banner.model");
const insertIntoDB = async (data) => {
    const result = await banner_model_1.Banner.create(data);
    return result;
};
const getAllData = async () => {
    const result = await banner_model_1.Banner.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await banner_model_1.Banner.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await banner_model_1.Banner.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await banner_model_1.Banner.deleteOne({ _id: id });
    return result;
};
exports.BannerService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
