"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const userZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z.string({ required_error: 'First Name is Required!' }),
        lastName: zod_1.z.string({ required_error: 'Last Name is Required!' }),
        email: zod_1.z.string({ required_error: 'Email is Required!' }).email(),
        role: zod_1.z.string({ required_error: 'Role is Required!' }).optional(),
        password: zod_1.z.string({ required_error: 'Password is Required!' }),
    }),
});
exports.UserValidation = { userZodSchema };
