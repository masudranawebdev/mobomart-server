"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovingTipsRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const movingTips_controller_1 = require("./movingTips.controller");
const movingTips_validation_1 = require("./movingTips.validation");
const router = (0, express_1.Router)();
router.get('/', movingTips_controller_1.MovingTipsController.getAllData);
router.get('/:id', movingTips_controller_1.MovingTipsController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(movingTips_validation_1.MovingTipsValidation.updateZodSchema), movingTips_controller_1.MovingTipsController.updateById);
router.delete('/:id', movingTips_controller_1.MovingTipsController.deleteById);
router.post('/create-moving-tip', (0, validateRequest_1.default)(movingTips_validation_1.MovingTipsValidation.createZodSchema), movingTips_controller_1.MovingTipsController.insertIntoDB);
exports.MovingTipsRoutes = router;
