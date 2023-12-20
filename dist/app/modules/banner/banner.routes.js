"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const banner_controller_1 = require("./banner.controller");
const banner_validation_1 = require("./banner.validation");
const router = (0, express_1.Router)();
router.get('/', banner_controller_1.BannerController.getAllData);
router.get('/:id', banner_controller_1.BannerController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(banner_validation_1.BannerValidation.updateZodSchema), banner_controller_1.BannerController.updateById);
router.delete('/:id', banner_controller_1.BannerController.deleteById);
router.post('/create-banner', (0, validateRequest_1.default)(banner_validation_1.BannerValidation.createZodSchema), banner_controller_1.BannerController.insertIntoDB);
exports.BannerRoutes = router;
