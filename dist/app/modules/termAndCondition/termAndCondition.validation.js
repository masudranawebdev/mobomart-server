"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermAndConditionValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        content: zod_1.z.string({ required_error: 'Content is Required!' }),
    }),
});
exports.TermAndConditionValidation = {
    createZodSchema,
};
