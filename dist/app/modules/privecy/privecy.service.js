"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivecyService = void 0;
const privecy_model_1 = require("./privecy.model");
const insertIntoDB = async (data) => {
    const existingPrivecy = await privecy_model_1.Privecy.find({});
    if (existingPrivecy.length === 0) {
        const result = await privecy_model_1.Privecy.create(data);
        return result;
    }
    else {
        const privecy = existingPrivecy[0];
        const { _id } = privecy;
        const filter = { _id };
        const update = data;
        const options = { new: true };
        const result = await privecy_model_1.Privecy.findOneAndUpdate(filter, update, options);
        return result;
    }
};
const getAllData = async () => {
    const result = await privecy_model_1.Privecy.find({});
    return result;
};
exports.PrivecyService = {
    insertIntoDB,
    getAllData,
};
