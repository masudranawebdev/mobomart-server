"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const client_controller_1 = require("./client.controller");
const client_validation_1 = require("./client.validation");
const router = (0, express_1.Router)();
router.get('/', client_controller_1.ClientController.getAllData);
router.get('/:id', client_controller_1.ClientController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(client_validation_1.ClientValidation.updateZodSchema), client_controller_1.ClientController.updateById);
router.delete('/:id', client_controller_1.ClientController.deleteById);
router.post('/create-client', (0, validateRequest_1.default)(client_validation_1.ClientValidation.createZodSchema), client_controller_1.ClientController.insertIntoDB);
exports.ClientRoutes = router;
