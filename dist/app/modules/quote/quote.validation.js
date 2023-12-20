"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        fullName: zod_1.z.string({ required_error: 'Full Name is Required!' }),
        email: zod_1.z.string({ required_error: 'Email is Required!' }).email(),
        movingType: zod_1.z.string({ required_error: 'Moving Type is Required!' }),
        date: zod_1.z.string({ required_error: 'Shifting Date is Required!' }),
        from: zod_1.z.string({ required_error: 'From is Required!' }),
        to: zod_1.z.string({ required_error: 'To is Required!' }),
        information: zod_1.z.string({ required_error: 'Information is Required!' }),
        contactNo: zod_1.z.string({ required_error: 'Contact No is Required!' }),
    }),
});
const updateZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        fullName: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        movingType: zod_1.z.string().optional(),
        date: zod_1.z.string().optional(),
        from: zod_1.z.string().optional(),
        to: zod_1.z.string().optional(),
        information: zod_1.z.string().optional(),
        contactNo: zod_1.z.string().optional(),
    }),
});
exports.QuoteValidation = {
    createZodSchema,
    updateZodSchema,
};
