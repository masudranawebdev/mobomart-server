"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const contact_controller_1 = require("./contact.controller");
const contact_validation_1 = require("./contact.validation");
const router = (0, express_1.Router)();
router.get('/', contact_controller_1.ContactController.getAllData);
router.get('/:id', contact_controller_1.ContactController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(contact_validation_1.ContactValidation.updateZodSchema), contact_controller_1.ContactController.updateById);
router.delete('/:id', contact_controller_1.ContactController.deleteById);
router.post('/create-contact', (0, validateRequest_1.default)(contact_validation_1.ContactValidation.createZodSchema), contact_controller_1.ContactController.insertIntoDB);
exports.ContactRoutes = router;
