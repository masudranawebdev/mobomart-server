"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovingTipsService = void 0;
const movingTips_model_1 = require("./movingTips.model");
const insertIntoDB = async (data) => {
    const result = await movingTips_model_1.MovingTip.create(data);
    return result;
};
const getAllData = async () => {
    const result = await movingTips_model_1.MovingTip.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await movingTips_model_1.MovingTip.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await movingTips_model_1.MovingTip.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await movingTips_model_1.MovingTip.deleteOne({ _id: id });
    return result;
};
exports.MovingTipsService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
