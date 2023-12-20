"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialLinkService = void 0;
const socialLink_model_1 = require("./socialLink.model");
const insertIntoDB = async (data) => {
    const existingSoSocialLink = await socialLink_model_1.Social.find({});
    if (existingSoSocialLink.length === 0) {
        const result = await socialLink_model_1.Social.create(data);
        return result;
    }
    else {
        const SocialLink = existingSoSocialLink[0];
        const { id } = SocialLink;
        const filter = { _id: id };
        const update = data;
        const options = { new: true };
        const result = await socialLink_model_1.Social.findOneAndUpdate(filter, update, options);
        return result;
    }
};
const getAllData = async () => {
    const result = await socialLink_model_1.Social.find({});
    return result;
};
exports.SocialLinkService = {
    insertIntoDB,
    getAllData,
};
