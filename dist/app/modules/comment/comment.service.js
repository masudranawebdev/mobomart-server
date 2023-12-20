"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const comment_model_1 = require("./comment.model");
const insertIntoDB = async (data) => {
    const result = await comment_model_1.Comment.create(data);
    return result;
};
const getAllData = async (id) => {
    const result = await comment_model_1.Comment.find({ post: id });
    return result;
};
const deleteById = async (id) => {
    const result = await comment_model_1.Comment.deleteOne({ _id: id });
    return result;
};
exports.CommentService = {
    insertIntoDB,
    getAllData,
    deleteById,
};
