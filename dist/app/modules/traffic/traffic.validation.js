"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        users: zod_1.z.string({ required_error: 'Required!' }),
    }),
});
exports.UserValidation = { createZodSchema };
