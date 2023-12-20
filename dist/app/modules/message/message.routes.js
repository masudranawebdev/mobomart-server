"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const message_controller_1 = require("./message.controller");
const message_validation_1 = require("./message.validation");
const router = (0, express_1.Router)();
router.get('/', message_controller_1.MessageController.getAllData);
router.get('/:id', message_controller_1.MessageController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(message_validation_1.MessageValidation.updateZodSchema), message_controller_1.MessageController.updateById);
router.delete('/:id', message_controller_1.MessageController.deleteById);
router.post('/create-message', (0, validateRequest_1.default)(message_validation_1.MessageValidation.createZodSchema), message_controller_1.MessageController.insertIntoDB);
exports.MessageRoutes = router;
