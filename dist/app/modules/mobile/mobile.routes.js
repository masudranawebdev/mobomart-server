"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileRoutes = void 0;
const express_1 = require("express");
const mobile_controller_1 = require("./mobile.controller");
const router = (0, express_1.Router)();
router.get('/', mobile_controller_1.MobileController.getAllData);
router.post('/create-mobile', mobile_controller_1.MobileController.insertIntoDB);
exports.MobileRoutes = router;
