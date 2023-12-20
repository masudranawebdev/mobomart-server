"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const service_controller_1 = require("./service.controller");
const service_validation_1 = require("./service.validation");
const router = (0, express_1.Router)();
router.get('/', service_controller_1.ServiceController.getAllData);
router.get('/count', service_controller_1.ServiceController.countAllData);
router.get('/:id', service_controller_1.ServiceController.getSingleData);
router.patch('/:id', service_controller_1.ServiceController.updateById);
router.delete('/:id', service_controller_1.ServiceController.deleteById);
router.post('/create-service', (0, validateRequest_1.default)(service_validation_1.ServiceValidation.serviceZodSchema), service_controller_1.ServiceController.insertIntoDB);
exports.ServiceRoutes = router;
