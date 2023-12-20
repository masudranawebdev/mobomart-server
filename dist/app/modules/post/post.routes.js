"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const post_controller_1 = require("./post.controller");
const post_validation_1 = require("./post.validation");
const router = (0, express_1.Router)();
router.get('/', post_controller_1.PostController.getAllData);
router.get('/all-tags', post_controller_1.PostController.getAllTags);
router.get('/count', post_controller_1.PostController.countAllData);
router.get('/categories-with-data', post_controller_1.PostController.getCategoryWithData);
router.get('/category/:categoryId', post_controller_1.PostController.getDataByCategoryId);
router.get('/:slug', post_controller_1.PostController.getSingleData);
router.get('/post/:id', post_controller_1.PostController.getDataById);
router.get('/tag/:tag', post_controller_1.PostController.getDataByTag);
router.patch('/:id', (0, validateRequest_1.default)(post_validation_1.PostValidation.updateZodSchema), post_controller_1.PostController.updateById);
router.delete('/:id', post_controller_1.PostController.deleteById);
router.post('/create-post', (0, validateRequest_1.default)(post_validation_1.PostValidation.createZodSchema), post_controller_1.PostController.insertIntoDB);
exports.PostRoutes = router;