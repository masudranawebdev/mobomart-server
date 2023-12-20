"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogHeadRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const blogHead_controller_1 = require("./blogHead.controller");
const blogHead_validation_1 = require("./blogHead.validation");
const router = (0, express_1.Router)();
router.get('/', blogHead_controller_1.BlogHeadController.getAllData);
router.get('/:id', blogHead_controller_1.BlogHeadController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(blogHead_validation_1.BlogHeadValidation.updateZodSchema), blogHead_controller_1.BlogHeadController.updateById);
router.delete('/:id', blogHead_controller_1.BlogHeadController.deleteById);
router.post('/create-blog-head', (0, validateRequest_1.default)(blogHead_validation_1.BlogHeadValidation.createZodSchema), blogHead_controller_1.BlogHeadController.insertIntoDB);
exports.BlogHeadRoutes = router;
