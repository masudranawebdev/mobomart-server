"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        fullName: zod_1.z.string({ required_error: 'Full Name is Required!' }),
        email: zod_1.z.string({ required_error: 'Email is Required!' }).email(),
        contactNo: zod_1.z.string({ required_error: 'ContactNo is Required!' }),
        message: zod_1.z.string({ required_error: 'Message is Required!' }),
    }),
});
const updateZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        fullName: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        contactNo: zod_1.z.string().optional(),
        message: zod_1.z.string().optional(),
    }),
});
exports.MessageValidation = {
    createZodSchema,
    updateZodSchema,
};
