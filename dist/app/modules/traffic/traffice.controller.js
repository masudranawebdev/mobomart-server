"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const traffic_service_1 = require("./traffic.service");
const create = (0, catchAsync_1.default)(async (req, res) => {
    const result = await traffic_service_1.TrafficService.create();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'visited site now',
        data: result,
    });
});
const traffics = (0, catchAsync_1.default)(async (req, res) => {
    const result = await traffic_service_1.TrafficService.traffics();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'traffics retrived',
        data: result,
    });
});
exports.TrafficController = {
    create,
    traffics,
};
