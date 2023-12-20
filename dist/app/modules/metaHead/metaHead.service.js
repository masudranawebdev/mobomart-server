"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaHeadService = void 0;
const metaHead_model_1 = require("./metaHead.model");
const insertIntoDB = async (data) => {
    const existingMetaHead = await metaHead_model_1.MetaHead.find({});
    if (existingMetaHead.length === 0) {
        const result = await metaHead_model_1.MetaHead.create(data);
        return result;
    }
    else {
        const metaHead = existingMetaHead[0];
        const { _id } = metaHead;
        const filter = { _id };
        const update = data;
        const options = { new: true };
        const result = await metaHead_model_1.MetaHead.findOneAndUpdate(filter, update, options);
        return result;
    }
};
const getAllData = async () => {
    const result = await metaHead_model_1.MetaHead.find({});
    return result;
};
exports.MetaHeadService = {
    insertIntoDB,
    getAllData,
};
