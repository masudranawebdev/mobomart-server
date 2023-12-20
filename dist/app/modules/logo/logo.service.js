"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoService = void 0;
const logo_model_1 = require("./logo.model");
const insertIntoDB = async (data) => {
    const existingLogo = await logo_model_1.Logo.find({});
    if (existingLogo.length === 0) {
        const result = await logo_model_1.Logo.create(data);
        return result;
    }
    else {
        const logo = existingLogo[0];
        const { _id } = logo;
        const filter = { _id };
        const update = data;
        const options = { new: true };
        const result = await logo_model_1.Logo.findOneAndUpdate(filter, update, options);
        return result;
    }
};
const getAllData = async () => {
    const result = await logo_model_1.Logo.find({});
    return result;
};
exports.LogoService = {
    insertIntoDB,
    getAllData,
};
