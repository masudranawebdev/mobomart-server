"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyTipsController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const companyTips_service_1 = require("./companyTips.service");
const insertIntoDB = (0, catchAsync_1.default)(async (req, res) => {
    const data = req.body;
    const result = await companyTips_service_1.CompanyTipsService.insertIntoDB(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Data Created Successfully',
        data: result,
    });
});
const getAllData = (0, catchAsync_1.default)(async (req, res) => {
    const result = await companyTips_service_1.CompanyTipsService.getAllData();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'All data Retrived Successfully',
        data: result,
    });
});
const getSingleData = (0, catchAsync_1.default)(async (req, res) => {
    const result = await companyTips_service_1.CompanyTipsService.getSingleData(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Single data Retrived Successfully',
        data: result,
    });
});
const updateById = (0, catchAsync_1.default)(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const result = await companyTips_service_1.CompanyTipsService.updateById(id, data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Data Updated Successfully',
        data: result,
    });
});
const deleteById = (0, catchAsync_1.default)(async (req, res) => {
    const result = await companyTips_service_1.CompanyTipsService.deleteById(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Data Deleted Successfully',
        data: result,
    });
});
exports.CompanyTipsController = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
