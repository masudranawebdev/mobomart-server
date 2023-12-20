"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoService = void 0;
const video_model_1 = require("./video.model");
const insertIntoDB = async (data) => {
    const result = await video_model_1.Video.create(data);
    return result;
};
const getAllData = async () => {
    const result = await video_model_1.Video.find({}).populate('author');
    return result;
};
const getSingleData = async (id) => {
    const result = await video_model_1.Video.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await video_model_1.Video.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await video_model_1.Video.deleteOne({ _id: id });
    return result;
};
exports.VideoService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
