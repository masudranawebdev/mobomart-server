"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySectionValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is Required!' }),
        content: zod_1.z.string({ required_error: 'Content is Required!' }),
        icon: zod_1.z.string({ required_error: 'Icon is Required!' }),
    }),
});
const updateZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        content: zod_1.z.string().optional(),
        icon: zod_1.z.string().optional(),
    }),
});
exports.CategorySectionValidation = {
    createZodSchema,
    updateZodSchema,
};
