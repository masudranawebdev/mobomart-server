"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqHeadRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const faqHead_controller_1 = require("./faqHead.controller");
const faqHead_validation_1 = require("./faqHead.validation");
const router = (0, express_1.Router)();
router.get('/', faqHead_controller_1.FaqHeadController.getAllData);
router.get('/:id', faqHead_controller_1.FaqHeadController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(faqHead_validation_1.FaqHeadValidation.updateZodSchema), faqHead_controller_1.FaqHeadController.updateById);
router.delete('/:id', faqHead_controller_1.FaqHeadController.deleteById);
router.post('/create-faq-head', (0, validateRequest_1.default)(faqHead_validation_1.FaqHeadValidation.createZodSchema), faqHead_controller_1.FaqHeadController.insertIntoDB);
exports.FaqHeadRoutes = router;
