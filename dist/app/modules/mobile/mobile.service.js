"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileService = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const mobile_constance_1 = require("./mobile.constance");
const mobile_model_1 = require("./mobile.model");
const insertIntoDB = async (data) => {
    const result = await mobile_model_1.Mobile.create(data);
    return result;
};
const getAllData = async (filters, paginationOptions) => {
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const andCondition = [];
    if (searchTerm) {
        andCondition.push({
            $or: mobile_constance_1.mobileSearchableField.map(field => ({
                [field]: {
                    $regex: searchTerm,
                    $options: 'i',
                },
            })),
        });
    }
    if (Object.keys(filtersData).length) {
        andCondition.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const sortCondition = {};
    if (sortBy && sortOrder) {
        if (sortBy === 'price') {
            // Sorting by price
            sortCondition[sortBy] = sortOrder === 'asc' ? 1 : -1;
        }
        else {
            // Add other fields for sorting as needed
            sortCondition[sortBy] = sortOrder;
        }
    }
    const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {};
    const result = await mobile_model_1.Mobile.find(whereCondition)
        .sort(sortCondition)
        .skip(skip)
        .limit(limit);
    const total = await mobile_model_1.Mobile.countDocuments(whereCondition);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
};
exports.MobileService = {
    insertIntoDB,
    getAllData,
};
