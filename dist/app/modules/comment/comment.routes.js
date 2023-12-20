"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const comment_controller_1 = require("./comment.controller");
const comment_validation_1 = require("./comment.validation");
const router = (0, express_1.Router)();
router.get('/:id', comment_controller_1.CommentController.getAllData);
router.delete('/:id', comment_controller_1.CommentController.deleteById);
router.post('/create-comment', (0, validateRequest_1.default)(comment_validation_1.CommentValidation.createZodSchema), comment_controller_1.CommentController.insertIntoDB);
exports.CommentRoutes = router;
