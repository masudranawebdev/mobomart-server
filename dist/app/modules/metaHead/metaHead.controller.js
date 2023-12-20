"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaHeadController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const metaHead_service_1 = require("./metaHead.service");
const insertIntoDB = (0, catchAsync_1.default)(async (req, res) => {
    const result = await metaHead_service_1.MetaHeadService.insertIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Data created Successfully',
        data: result,
    });
});
const getAllData = (0, catchAsync_1.default)(async (req, res) => {
    const result = await metaHead_service_1.MetaHeadService.getAllData();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'All data retrived successfully',
        data: result,
    });
});
exports.MetaHeadController = {
    insertIntoDB,
    getAllData,
};
