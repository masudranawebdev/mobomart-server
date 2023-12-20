"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialLinkRoutes = void 0;
const express_1 = require("express");
const socialLink_controller_1 = require("./socialLink.controller");
const router = (0, express_1.Router)();
router.get('/', socialLink_controller_1.SocialLinkController.getAllData);
router.post('/create-social-link', socialLink_controller_1.SocialLinkController.insertIntoDB);
exports.SocialLinkRoutes = router;
