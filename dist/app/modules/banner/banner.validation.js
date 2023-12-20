"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is Required!' }),
        subTitleOne: zod_1.z.string({ required_error: 'Sub Title One is Required!' }),
        subTitleTwo: zod_1.z.string({ required_error: 'Sub Title Two is Required!' }),
        content: zod_1.z.string({ required_error: 'Content is Required!' }),
        thumbnail: zod_1.z.string({ required_error: 'Thumbnail is Required!' }),
    }),
});
const updateZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        subTitleOne: zod_1.z.string().optional(),
        subTitleTwo: zod_1.z.string().optional(),
        content: zod_1.z.string().optional(),
        thumbnail: zod_1.z.string().optional(),
    }),
});
exports.BannerValidation = {
    createZodSchema,
    updateZodSchema,
};
