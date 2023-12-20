"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const quote_controller_1 = require("./quote.controller");
const quote_validation_1 = require("./quote.validation");
const router = (0, express_1.Router)();
router.get('/', quote_controller_1.QuoteController.getAllData);
router.get('/:id', quote_controller_1.QuoteController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(quote_validation_1.QuoteValidation.updateZodSchema), quote_controller_1.QuoteController.updateById);
router.delete('/:id', quote_controller_1.QuoteController.deleteById);
router.post('/create-quote', (0, validateRequest_1.default)(quote_validation_1.QuoteValidation.createZodSchema), quote_controller_1.QuoteController.insertIntoDB);
exports.QuoteRoutes = router;
