"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryHeadRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const categoryHead_controller_1 = require("./categoryHead.controller");
const categoryHead_validation_1 = require("./categoryHead.validation");
const router = (0, express_1.Router)();
router.get('/', categoryHead_controller_1.CategoryHeadController.getAllData);
router.get('/:id', categoryHead_controller_1.CategoryHeadController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(categoryHead_validation_1.CategoryHeadValidation.updateZodSchema), categoryHead_controller_1.CategoryHeadController.updateById);
router.delete('/:id', categoryHead_controller_1.CategoryHeadController.deleteById);
router.post('/create-category-head', (0, validateRequest_1.default)(categoryHead_validation_1.CategoryHeadValidation.createZodSchema), categoryHead_controller_1.CategoryHeadController.insertIntoDB);
exports.CategoryHeadRoutes = router;
