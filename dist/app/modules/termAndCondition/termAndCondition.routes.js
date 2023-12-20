"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermAndConditionRoutes = void 0;
const express_1 = require("express");
const termAndCondition_controller_1 = require("./termAndCondition.controller");
const router = (0, express_1.Router)();
router.get('/', termAndCondition_controller_1.TermAndConditionController.getAllData);
router.post('/create-term-and-condition', termAndCondition_controller_1.TermAndConditionController.insertIntoDB);
exports.TermAndConditionRoutes = router;
