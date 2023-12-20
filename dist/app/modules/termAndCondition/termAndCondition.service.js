"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermAndConditionService = void 0;
const termAndCondition_model_1 = require("./termAndCondition.model");
const insertIntoDB = async (data) => {
    const existingTermAndCondition = await termAndCondition_model_1.TermAndCondition.find({});
    if (existingTermAndCondition.length === 0) {
        const result = await termAndCondition_model_1.TermAndCondition.create(data);
        return result;
    }
    else {
        const termAndCondition = existingTermAndCondition[0];
        const { _id } = termAndCondition;
        const filter = { _id };
        const update = data;
        const options = { new: true };
        const result = await termAndCondition_model_1.TermAndCondition.findOneAndUpdate(filter, update, options);
        return result;
    }
};
const getAllData = async () => {
    const result = await termAndCondition_model_1.TermAndCondition.find({});
    return result;
};
exports.TermAndConditionService = {
    insertIntoDB,
    getAllData,
};
