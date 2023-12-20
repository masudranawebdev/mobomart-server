"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        fullName: zod_1.z.string({ required_error: 'Full Name is Required!' }),
        email: zod_1.z.string({ required_error: 'Email is Required!' }).email(),
        message: zod_1.z.string({ required_error: 'Message is Required!' }),
        post: zod_1.z.string({ required_error: 'Post Id is Required!' }),
    }),
});
exports.CommentValidation = {
    createZodSchema,
};
