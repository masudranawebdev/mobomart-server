"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const mail_controller_1 = require("./mail.controller");
const mail_validation_1 = require("./mail.validation");
const router = (0, express_1.Router)();
router.get('/', mail_controller_1.MailController.getAllData);
router.get('/count', mail_controller_1.MailController.countAllData);
router.get('/:id', mail_controller_1.MailController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(mail_validation_1.MailValidation.updateZodSchema), mail_controller_1.MailController.updateById);
router.delete('/:id', mail_controller_1.MailController.deleteById);
router.post('/create-mail', (0, validateRequest_1.default)(mail_validation_1.MailValidation.createZodSchema), mail_controller_1.MailController.insertIntoDB);
exports.MailRoutes = router;
