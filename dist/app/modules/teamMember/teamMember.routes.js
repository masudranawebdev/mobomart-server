"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const teamMember_controller_1 = require("./teamMember.controller");
const teamMember_validation_1 = require("./teamMember.validation");
const router = (0, express_1.Router)();
router.get('/', teamMember_controller_1.TeamMemberController.getAllData);
router.get('/:id', teamMember_controller_1.TeamMemberController.getSingleData);
router.patch('/:id', (0, validateRequest_1.default)(teamMember_validation_1.TeamMemberValidation.updateZodSchema), teamMember_controller_1.TeamMemberController.updateById);
router.delete('/:id', teamMember_controller_1.TeamMemberController.deleteById);
router.post('/create-team-member', (0, validateRequest_1.default)(teamMember_validation_1.TeamMemberValidation.createZodSchema), teamMember_controller_1.TeamMemberController.insertIntoDB);
exports.TeamMemberRoutes = router;
