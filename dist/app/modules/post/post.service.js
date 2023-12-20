"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const post_model_1 = require("./post.model");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const generateSlug_1 = require("../../../helpers/generateSlug");
const insertIntoDB = async (data) => {
    const { slug } = data;
    const getSlug = (0, generateSlug_1.generateSlug)(slug);
    const existingPost = await post_model_1.Post.findOne({ slug: getSlug });
    if (existingPost) {
        throw new ApiError_1.default(http_status_1.default.CONFLICT, false, 'Post with this slug already exists.');
    }
    data['slug'] = getSlug;
    const result = (await (await post_model_1.Post.create(data)).populate('category')).populate('author');
    return result;
};
const getAllData = async (paginationOptions) => {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const sortCondition = {};
    if (sortBy && sortOrder) {
        sortCondition[sortBy] = sortOrder;
    }
    const total = await post_model_1.Post.countDocuments();
    const result = await post_model_1.Post.find({})
        .sort(sortCondition)
        .skip(skip)
        .limit(limit)
        .populate('category')
        .populate('author');
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
};
const getDataByCategoryId = async (categoryId, paginationOptions) => {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const sortCondition = {};
    if (sortBy && sortOrder) {
        sortCondition[sortBy] = sortOrder;
    }
    const total = await post_model_1.Post.countDocuments({
        category: categoryId,
    });
    const result = await post_model_1.Post.find({
        category: categoryId,
    })
        .sort(sortCondition)
        .skip(skip)
        .limit(limit)
        .populate('category')
        .populate('author');
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
};
const countAllData = async () => {
    const result = await post_model_1.Post.countDocuments();
    return result;
};
const getSingleData = async (slug) => {
    const result = await post_model_1.Post.findOne({ slug })
        .populate('category')
        .populate('author');
    return result;
};
const updateById = async (id, payload) => {
    const { slug } = payload;
    // const getSlug = slug && generateSlug(slug);
    const getSlug = slug && (0, generateSlug_1.createSlug)(slug);
    payload['slug'] = getSlug;
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await post_model_1.Post.findOneAndUpdate(filter, update, options).populate('category');
    return result;
};
const getDataById = async (id) => {
    const result = await post_model_1.Post.findOne({ _id: id }).populate('category');
    return result;
};
const getCategoryWithData = async () => {
    const data = await post_model_1.Post.find({})
        .select({ _id: 1, title: 1, slug: 1, category: 1 })
        .populate('category', 'title');
    const uniqueCategories = {};
    data.forEach(item => {
        //@ts-ignore
        const categoryId = item.category._id.toString(); // Convert ObjectId to string
        const { _id, title, slug } = item; // Extract _id and title properties
        const plainItem = {
            _id: _id.toString(), // Convert ObjectId to string
            title,
            slug,
        };
        if (!uniqueCategories[categoryId]) {
            uniqueCategories[categoryId] = {
                category: {
                    _id: categoryId,
                    //@ts-ignore
                    title: item.category.title,
                },
                //@ts-ignore
                data: [plainItem],
            };
        }
        else {
            //@ts-ignore
            uniqueCategories[categoryId].data.push(plainItem);
        }
    });
    const resultArray = Object.values(uniqueCategories);
    return resultArray;
};
const deleteById = async (id) => {
    const result = await post_model_1.Post.deleteOne({ _id: id }).populate('category');
    return result;
};
const getDataByTag = async (tag) => {
    const getTag = (0, generateSlug_1.slugToTitle)(tag);
    const result = await post_model_1.Post.find({
        // tags: { $in: [getTag] },
        tags: { $regex: new RegExp(getTag, 'i') },
    }).populate('category');
    return result;
};
const getAllTags = async () => {
    try {
        const tags = await post_model_1.Post.aggregate([
            { $unwind: '$tags' },
            { $project: { _id: 0, tags: 1 } },
            { $group: { _id: null, tags: { $addToSet: '$tags' } } },
            { $project: { _id: 0, tags: 1 } },
        ]);
        return tags;
    }
    catch (error) {
        console.error(error);
    }
};
exports.PostService = {
    getAllTags,
    getAllData,
    deleteById,
    updateById,
    getDataById,
    getDataByTag,
    countAllData,
    insertIntoDB,
    getSingleData,
    getDataByCategoryId,
    getCategoryWithData,
};
