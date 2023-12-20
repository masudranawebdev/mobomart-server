"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const category_controller_1 = require("./category.controller");
const category_validation_1 = require("./category.validation");
const router = (0, express_1.Router)();
router.get('/', category_controller_1.CategoryController.getAllData);
router.get('/:title', category_controller_1.CategoryController.getSingleData);
router.get('/category/:id', category_controller_1.CategoryController.getDataById);
router.patch('/:id', (0, validateRequest_1.default)(category_validation_1.CategoryValidation.updateZodSchema), category_controller_1.CategoryController.updateById);
router.delete('/:id', category_controller_1.CategoryController.deleteById);
router.post('/create-category', (0, validateRequest_1.default)(category_validation_1.CategoryValidation.createZodSchema), category_controller_1.CategoryController.insertIntoDB);
exports.CategoryRoutes = router;
