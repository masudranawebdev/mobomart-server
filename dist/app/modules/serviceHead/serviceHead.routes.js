"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceHeadRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const serviceHead_controller_1 = require("./serviceHead.controller");
const serviceHead_validation_1 = require("./serviceHead.validation");
const router = (0, express_1.Router)();
router.get('/', serviceHead_controller_1.ServiceHeadController.getAllData);
router.get('/:id', serviceHead_controller_1.ServiceHeadController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(serviceHead_validation_1.ServiceHeadValidation.updateZodSchema), serviceHead_controller_1.ServiceHeadController.updateById);
router.delete('/:id', serviceHead_controller_1.ServiceHeadController.deleteById);
router.post('/create-service-head', (0, validateRequest_1.default)(serviceHead_validation_1.ServiceHeadValidation.createZodSchema), serviceHead_controller_1.ServiceHeadController.insertIntoDB);
exports.ServiceHeadRoutes = router;
