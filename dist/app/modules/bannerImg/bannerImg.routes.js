"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerImgRoutes = void 0;
const express_1 = require("express");
const bannerImg_controller_1 = require("./bannerImg.controller");
const router = (0, express_1.Router)();
router.get('/', bannerImg_controller_1.BannerImgController.getAllData);
router.post('/create-banner-img', bannerImg_controller_1.BannerImgController.insertIntoDB);
exports.BannerImgRoutes = router;
