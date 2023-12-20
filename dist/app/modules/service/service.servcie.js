"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceService = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const service_model_1 = require("./service.model");
const insertIntoDB = async (data) => {
    const result = await service_model_1.Service.create(data);
    return result;
};
const getAllData = async (paginationOptions) => {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const sortCondition = {};
    if (sortBy && sortOrder) {
        sortCondition[sortBy] = sortOrder;
    }
    const total = await service_model_1.Service.countDocuments();
    const result = await service_model_1.Service.find({})
        .sort(sortCondition)
        .skip(skip)
        .limit(limit);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
};
const countAllData = async () => {
    const result = await service_model_1.Service.countDocuments();
    return result;
};
const getSingleData = async (id) => {
    const result = await service_model_1.Service.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await service_model_1.Service.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await service_model_1.Service.deleteOne({ _id: id });
    return result;
};
exports.ServiceService = {
    insertIntoDB,
    getAllData,
    getSingleData,
    updateById,
    deleteById,
    countAllData,
};
