"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficRoutes = void 0;
const express_1 = require("express");
const traffice_controller_1 = require("./traffice.controller");
const router = (0, express_1.Router)();
router.get('/', traffice_controller_1.TrafficController.traffics);
router.post('/count', traffice_controller_1.TrafficController.create);
exports.TrafficRoutes = router;
