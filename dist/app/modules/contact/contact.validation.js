"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is Required!' }),
        description: zod_1.z.string({ required_error: 'Description is Required!' }),
        address: zod_1.z.string({ required_error: 'Address is Required!' }),
        contactNo: zod_1.z.array(zod_1.z.string({ required_error: 'Contact Number is Required!' })),
        email: zod_1.z.array(zod_1.z.string({ required_error: 'Email is Required!' })),
    }),
});
const updateZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        contactNo: zod_1.z.array(zod_1.z.string()).optional(),
        email: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
exports.ContactValidation = { createZodSchema, updateZodSchema };
