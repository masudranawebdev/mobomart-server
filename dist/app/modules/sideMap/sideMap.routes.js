"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideMapRoutes = void 0;
const express_1 = require("express");
const sideMap_controller_1 = require("./sideMap.controller");
const router = (0, express_1.Router)();
router.get('/', sideMap_controller_1.SideMapController.getAllData);
router.post('/create-side-map', sideMap_controller_1.SideMapController.insertIntoDB);
exports.SideMapRoutes = router;
