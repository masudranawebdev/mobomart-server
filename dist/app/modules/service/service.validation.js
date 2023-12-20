"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceValidation = void 0;
const zod_1 = require("zod");
const serviceZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is Required!' }),
        thumbnail: zod_1.z.string({ required_error: 'Thumbnail is Required!' }),
        description: zod_1.z.string({ required_error: 'Description is Required!' }),
        slug: zod_1.z.string({ required_error: 'Slug is Required!' }),
        content: zod_1.z.string({ required_error: 'Content is Required!' }),
        tags: zod_1.z.array(zod_1.z.string({ required_error: 'Tags is Required!' })),
        metaTitle: zod_1.z.string({ required_error: 'Meta Title is Required!' }),
        metaDescription: zod_1.z.string({
            required_error: 'Meta Description is Required!',
        }),
        metaKeyword: zod_1.z.array(zod_1.z.string({ required_error: 'Meta Keyword is Required!' })),
    }),
});
exports.ServiceValidation = {
    serviceZodSchema,
};
