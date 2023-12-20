"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientHeadRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const clientHead_controller_1 = require("./clientHead.controller");
const clientHead_validation_1 = require("./clientHead.validation");
const router = (0, express_1.Router)();
router.get('/', clientHead_controller_1.ClientHeadController.getAllData);
router.get('/:id', clientHead_controller_1.ClientHeadController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(clientHead_validation_1.ClientHeadValidation.updateZodSchema), clientHead_controller_1.ClientHeadController.updateById);
router.delete('/:id', clientHead_controller_1.ClientHeadController.deleteById);
router.post('/create-client-head', (0, validateRequest_1.default)(clientHead_validation_1.ClientHeadValidation.createZodSchema), clientHead_controller_1.ClientHeadController.insertIntoDB);
exports.ClientHeadRoutes = router;
