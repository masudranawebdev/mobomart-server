"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivecyRoutes = void 0;
const express_1 = require("express");
const privecy_controller_1 = require("./privecy.controller");
const router = (0, express_1.Router)();
router.get('/', privecy_controller_1.PrivecyController.getAllData);
router.post('/create-privecy', privecy_controller_1.PrivecyController.insertIntoDB);
exports.PrivecyRoutes = router;
