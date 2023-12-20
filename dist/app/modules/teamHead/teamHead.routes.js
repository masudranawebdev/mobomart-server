"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamHeadRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const teamHead_controller_1 = require("./teamHead.controller");
const teamHead_validation_1 = require("./teamHead.validation");
const router = (0, express_1.Router)();
router.get('/', teamHead_controller_1.TeamHeadController.getAllData);
router.get('/:id', teamHead_controller_1.TeamHeadController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(teamHead_validation_1.TeamHeadValidation.updateZodSchema), teamHead_controller_1.TeamHeadController.updateById);
router.delete('/:id', teamHead_controller_1.TeamHeadController.deleteById);
router.post('/create-team-head', (0, validateRequest_1.default)(teamHead_validation_1.TeamHeadValidation.createZodSchema), teamHead_controller_1.TeamHeadController.insertIntoDB);
exports.TeamHeadRoutes = router;
