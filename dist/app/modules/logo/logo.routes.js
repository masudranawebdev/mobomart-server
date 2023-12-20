"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoRoutes = void 0;
const express_1 = require("express");
const logo_controller_1 = require("./logo.controller");
const router = (0, express_1.Router)();
router.get('/', logo_controller_1.LogoController.getAllData);
router.post('/create-logo', logo_controller_1.LogoController.insertIntoDB);
exports.LogoRoutes = router;
