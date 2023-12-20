"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceIdRoutes = void 0;
const express_1 = require("express");
const serviceId_controller_1 = require("./serviceId.controller");
const router = (0, express_1.Router)();
router.get('/', serviceId_controller_1.ServiceIdController.getAllServices);
router.post('/create-service-id', serviceId_controller_1.ServiceIdController.create);
exports.ServiceIdRoutes = router;
