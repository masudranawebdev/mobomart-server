"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const video_controller_1 = require("./video.controller");
const video_validation_1 = require("./video.validation");
const router = (0, express_1.Router)();
router.get('/', video_controller_1.VideoController.getAllData);
router.get('/:id', video_controller_1.VideoController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(video_validation_1.VideoValidation.updateZodSchema), video_controller_1.VideoController.updateById);
router.delete('/:id', video_controller_1.VideoController.deleteById);
router.post('/create-video', (0, validateRequest_1.default)(video_validation_1.VideoValidation.createZodSchema), video_controller_1.VideoController.insertIntoDB);
exports.VideoRoutes = router;
