"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const review_controller_1 = require("./review.controller");
const review_validation_1 = require("./review.validation");
const router = (0, express_1.Router)();
router.get('/', review_controller_1.ReviewController.getAllData);
router.get('/:id', review_controller_1.ReviewController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(review_validation_1.ReviewValidation.updateZodSchema), review_controller_1.ReviewController.updateById);
router.delete('/:id', review_controller_1.ReviewController.deleteById);
router.post('/create-review', (0, validateRequest_1.default)(review_validation_1.ReviewValidation.createZodSchema), review_controller_1.ReviewController.insertIntoDB);
exports.ReviewRoutes = router;
