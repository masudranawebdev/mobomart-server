"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaRoutes = void 0;
const express_1 = require("express");
const area_controller_1 = require("./area.controller");
const router = (0, express_1.Router)();
router.get('/', area_controller_1.AreaController.getAllData);
router.post('/create-area', area_controller_1.AreaController.insertIntoDB);
exports.AreaRoutes = router;
