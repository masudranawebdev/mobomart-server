"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const category_model_1 = require("./category.model");
const generateSlug_1 = require("../../../helpers/generateSlug");
const insertIntoDB = async (data) => {
    const { title } = data;
    const getTitle = (0, generateSlug_1.generateSlugSpace)(title);
    const existingTitle = await category_model_1.Category.findOne({ title: getTitle });
    if (existingTitle) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, false, 'Category with this title already exists.');
    }
    data['title'] = getTitle;
    const result = await category_model_1.Category.create(data);
    return result;
};
const getAllData = async () => {
    const result = await category_model_1.Category.find({});
    return result;
};
const getSingleData = async (title) => {
    const result = await category_model_1.Category.findOne({
        title: new RegExp(`^${title}$`, 'i'),
    });
    return result;
};
const updateById = async (id, payload) => {
    const { title } = payload;
    const getTitle = title && (0, generateSlug_1.generateSlugSpace)(title);
    payload['title'] = getTitle;
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await category_model_1.Category.findOneAndUpdate(filter, update, options);
    return result;
};
const getDataById = async (id) => {
    const result = await category_model_1.Category.findById({ _id: id });
    return result;
};
const deleteById = async (id) => {
    const result = await category_model_1.Category.deleteOne({ _id: id });
    return result;
};
exports.CategoryService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
    getDataById,
};
