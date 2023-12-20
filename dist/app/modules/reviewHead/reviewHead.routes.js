"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewHeadRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const reviewHead_controller_1 = require("./reviewHead.controller");
const reviewHead_validation_1 = require("./reviewHead.validation");
const router = (0, express_1.Router)();
router.get('/', reviewHead_controller_1.ReviewHeadController.getAllData);
router.get('/:id', reviewHead_controller_1.ReviewHeadController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(reviewHead_validation_1.ReviewHeadValidation.updateZodSchema), reviewHead_controller_1.ReviewHeadController.updateById);
router.delete('/:id', reviewHead_controller_1.ReviewHeadController.deleteById);
router.post('/create-review-head', (0, validateRequest_1.default)(reviewHead_validation_1.ReviewHeadValidation.createZodSchema), reviewHead_controller_1.ReviewHeadController.insertIntoDB);
exports.ReviewHeadRoutes = router;
