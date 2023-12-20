"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewHeadValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        metaTitle: zod_1.z.string({ required_error: 'Meta Title is Required!' }),
        metaDescription: zod_1.z.string({
            required_error: 'Meta Description is Required!',
        }),
        metaKeyword: zod_1.z.array(zod_1.z.string({ required_error: 'MetaKeyword is Required!' })),
    }),
});
exports.ReviewHeadValidation = {
    createZodSchema,
};
