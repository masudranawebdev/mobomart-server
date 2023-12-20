"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerImgService = void 0;
const bannerImg_model_1 = require("./bannerImg.model");
const insertIntoDB = async (data) => {
    const existingBannerImg = await bannerImg_model_1.BannerImg.find({});
    if (existingBannerImg.length === 0) {
        const result = await bannerImg_model_1.BannerImg.create(data);
        return result;
    }
    else {
        const bannerImg = existingBannerImg[0];
        const { _id } = bannerImg;
        const filter = { _id };
        const update = data;
        const options = { new: true };
        const result = await bannerImg_model_1.BannerImg.findOneAndUpdate(filter, update, options);
        return result;
    }
};
const getAllData = async () => {
    const result = await bannerImg_model_1.BannerImg.find({});
    return result;
};
exports.BannerImgService = {
    insertIntoDB,
    getAllData,
};
