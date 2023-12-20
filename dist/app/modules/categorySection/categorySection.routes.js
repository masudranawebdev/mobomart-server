"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySectionRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const categorySection_validation_1 = require("./categorySection.validation");
const categorySection_controller_1 = require("./categorySection.controller");
const router = (0, express_1.Router)();
router.get('/', categorySection_controller_1.CategorySectionController.getAllData);
router.get('/:id', categorySection_controller_1.CategorySectionController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(categorySection_validation_1.CategorySectionValidation.updateZodSchema), categorySection_controller_1.CategorySectionController.updateById);
router.delete('/:id', categorySection_controller_1.CategorySectionController.deleteById);
router.post('/create-category-section', (0, validateRequest_1.default)(categorySection_validation_1.CategorySectionValidation.createZodSchema), categorySection_controller_1.CategorySectionController.insertIntoDB);
exports.CategorySectionRoutes = router;
