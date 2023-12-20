"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaHeadRoutes = void 0;
const express_1 = require("express");
const metaHead_controller_1 = require("./metaHead.controller");
const router = (0, express_1.Router)();
router.get('/', metaHead_controller_1.MetaHeadController.getAllData);
router.post('/create-meta-head', metaHead_controller_1.MetaHeadController.insertIntoDB);
exports.MetaHeadRoutes = router;
