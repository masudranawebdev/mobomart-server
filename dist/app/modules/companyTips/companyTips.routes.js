"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyTipsRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const companyTips_controller_1 = require("./companyTips.controller");
const companyTips_validation_1 = require("./companyTips.validation");
const router = (0, express_1.Router)();
router.get('/', companyTips_controller_1.CompanyTipsController.getAllData);
router.get('/:id', companyTips_controller_1.CompanyTipsController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(companyTips_validation_1.CompanyTipsValidation.updateZodSchema), companyTips_controller_1.CompanyTipsController.updateById);
router.delete('/:id', companyTips_controller_1.CompanyTipsController.deleteById);
router.post('/create-company-tip', (0, validateRequest_1.default)(companyTips_validation_1.CompanyTipsValidation.createZodSchema), companyTips_controller_1.CompanyTipsController.insertIntoDB);
exports.CompanyTipsRoutes = router;
