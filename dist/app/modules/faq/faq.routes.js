"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const faq_controller_1 = require("./faq.controller");
const faq_validation_1 = require("./faq.validation");
const router = (0, express_1.Router)();
router.get('/', faq_controller_1.FaqController.getAllData);
router.get('/:id', faq_controller_1.FaqController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(faq_validation_1.FaqValidation.updateZodSchema), faq_controller_1.FaqController.updateById);
router.delete('/:id', faq_controller_1.FaqController.deleteById);
router.post('/create-faq', (0, validateRequest_1.default)(faq_validation_1.FaqValidation.createZodSchema), faq_controller_1.FaqController.insertIntoDB);
exports.FaqRoutes = router;
