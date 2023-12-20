"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceIdService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const serviceId_model_1 = require("./serviceId.model");
const post_model_1 = require("../post/post.model");
const create = async (data) => {
    if (data.ids.length > 9) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, false, 'Please only selected nine data');
    }
    const isExistedData = await serviceId_model_1.ServiceId.find({});
    if (isExistedData.length === 0) {
        const result = await serviceId_model_1.ServiceId.create(data);
        return result;
    }
    else {
        const service = isExistedData[0];
        const { _id } = service;
        const filter = { _id };
        const update = Object.assign({}, data);
        const options = { new: true };
        const result = await serviceId_model_1.ServiceId.findOneAndUpdate(filter, update, options);
        return result;
    }
};
const getAllServices = async () => {
    const serviceIds = await serviceId_model_1.ServiceId.find({}).select({ ids: 1, _id: 0 });
    if (serviceIds.length === 0) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, false, 'Services Ids not found');
    }
    const ids = serviceIds[0].ids;
    const services = await post_model_1.Post.find({ _id: { $in: ids } });
    return services;
};
exports.ServiceIdService = { create, getAllServices };
