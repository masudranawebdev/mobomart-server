"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const about_controller_1 = require("./about.controller");
const about_validation_1 = require("./about.validation");
const router = (0, express_1.Router)();
router.get('/', about_controller_1.AboutController.getAllData);
router.get('/:id', about_controller_1.AboutController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(about_validation_1.AboutValidation.updateZodSchema), about_controller_1.AboutController.updateById);
router.delete('/:id', about_controller_1.AboutController.deleteById);
router.post('/create-about', (0, validateRequest_1.default)(about_validation_1.AboutValidation.createZodSchema), about_controller_1.AboutController.insertIntoDB);
exports.AboutRoutes = router;
