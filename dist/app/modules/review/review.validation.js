"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        fullName: zod_1.z.string({ required_error: 'Full Name is Required!' }),
        service: zod_1.z.string({ required_error: 'Service is Required!' }),
        img: zod_1.z.string({ required_error: 'Image is Required!' }),
        review: zod_1.z.string({ required_error: 'Review is Required!' }),
        rating: zod_1.z.number({ required_error: 'Rating is Required!' }),
    }),
});
const updateZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        fullName: zod_1.z.string().optional(),
        service: zod_1.z.string().optional(),
        img: zod_1.z.string().optional(),
        review: zod_1.z.string().optional(),
        rating: zod_1.z.string().optional(),
    }),
});
exports.ReviewValidation = { createZodSchema, updateZodSchema };
