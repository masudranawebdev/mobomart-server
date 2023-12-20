"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        thumbnail: zod_1.z.string({ required_error: 'Thumbnail is Required!' }),
    }),
});
const updateZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        thumbnail: zod_1.z.string().optional(),
    }),
});
exports.ClientValidation = {
    createZodSchema,
    updateZodSchema,
};
