"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissionRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const mission_controller_1 = require("./mission.controller");
const mission_validation_1 = require("./mission.validation");
const router = (0, express_1.Router)();
router.get('/', mission_controller_1.MissionController.getAllData);
router.get('/:id', mission_controller_1.MissionController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(mission_validation_1.MissionValidation.updateZodSchema), mission_controller_1.MissionController.updateById);
router.delete('/:id', mission_controller_1.MissionController.deleteById);
router.post('/create-mission', (0, validateRequest_1.default)(mission_validation_1.MissionValidation.createZodSchema), mission_controller_1.MissionController.insertIntoDB);
exports.MissionRoutes = router;
