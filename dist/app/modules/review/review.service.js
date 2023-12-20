"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const review_model_1 = require("./review.model");
const insertIntoDB = async (data) => {
    const result = await review_model_1.Review.create(data);
    return result;
};
const getAllData = async (paginationOptions) => {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const sortCondition = {};
    if (sortBy && sortOrder) {
        sortCondition[sortBy] = sortOrder;
    }
    const total = await review_model_1.Review.countDocuments();
    const result = await review_model_1.Review.find({})
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
const getSingleData = async (id) => {
    const result = await review_model_1.Review.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await review_model_1.Review.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await review_model_1.Review.deleteOne({ _id: id });
    return result;
};
exports.ReviewService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
