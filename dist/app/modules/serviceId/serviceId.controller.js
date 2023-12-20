"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceIdController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const serviceId_service_1 = require("./serviceId.service");
const create = (0, catchAsync_1.default)(async (req, res) => {
    const data = req.body;
    const result = await serviceId_service_1.ServiceIdService.create(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'ServiceId added successfully',
        data: result,
    });
});
const getAllServices = (0, catchAsync_1.default)(async (req, res) => {
    const result = await serviceId_service_1.ServiceIdService.getAllServices();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'All Services Retrived Successfully',
        data: result,
    });
});
exports.ServiceIdController = {
    create,
    getAllServices,
};
