"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const post_service_1 = require("./post.service");
const pick_1 = __importDefault(require("../../../shared/pick"));
const pagination_1 = require("../../../constants/pagination");
const insertIntoDB = (0, catchAsync_1.default)(async (req, res) => {
    const data = req.body;
    const result = await post_service_1.PostService.insertIntoDB(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Data Created Successfully',
        data: result,
    });
});
const getAllData = (0, catchAsync_1.default)(async (req, res) => {
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = await post_service_1.PostService.getAllData(paginationOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'All data Retrived Successfully',
        data: result,
    });
});
const getDataByCategoryId = (0, catchAsync_1.default)(async (req, res) => {
    const { categoryId } = req.params;
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = await post_service_1.PostService.getDataByCategoryId(categoryId, paginationOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Category mass data Retrived Successfully',
        data: result,
    });
});
const getSingleData = (0, catchAsync_1.default)(async (req, res) => {
    const result = await post_service_1.PostService.getSingleData(req.params.slug);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Single data Retrived Successfully',
        data: result,
    });
});
const getDataById = (0, catchAsync_1.default)(async (req, res) => {
    const result = await post_service_1.PostService.getDataById(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Single data Retrived Successfully',
        data: result,
    });
});
const countAllData = (0, catchAsync_1.default)(async (req, res) => {
    const result = await post_service_1.PostService.countAllData();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Data counted Successfully',
        data: result,
    });
});
const getCategoryWithData = (0, catchAsync_1.default)(async (req, res) => {
    const result = await post_service_1.PostService.getCategoryWithData();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Get Category with Data retrived Successfully',
        data: result,
    });
});
const updateById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const result = await post_service_1.PostService.updateById(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Data Updated Successfully',
        data: result,
    });
});
const deleteById = (0, catchAsync_1.default)(async (req, res) => {
    const result = await post_service_1.PostService.deleteById(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Data Deleted Successfully',
        data: result,
    });
});
const getDataByTag = (0, catchAsync_1.default)(async (req, res) => {
    const result = await post_service_1.PostService.getDataByTag(req.params.tag);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Data retrived Successfully',
        data: result,
    });
});
const getAllTags = (0, catchAsync_1.default)(async (req, res) => {
    const result = await post_service_1.PostService.getAllTags();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'All Tags retrived Successfully',
        data: result,
    });
});
exports.PostController = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
    countAllData,
    getDataById,
    getDataByTag,
    getDataByCategoryId,
    getAllTags,
    getCategoryWithData,
};
