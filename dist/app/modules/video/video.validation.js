"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is Required!' }),
        author: zod_1.z.string({ required_error: 'Author is Required!' }),
        thumbnail: zod_1.z.string({ required_error: 'Thumbnail is Required!' }),
        duration: zod_1.z.string({ required_error: 'Duration is Required!' }).optional(),
        link: zod_1.z.string({ required_error: 'Link is Required!' }),
    }),
});
const updateZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        author: zod_1.z.string().optional(),
        thumbnail: zod_1.z.string().optional(),
        duration: zod_1.z.string().optional(),
        date: zod_1.z.string().optional(),
        link: zod_1.z.string().optional(),
    }),
});
exports.VideoValidation = { createZodSchema, updateZodSchema };
