"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceIdValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        ids: zod_1.z.array(zod_1.z.string({ required_error: 'Ids is Required!' })),
    }),
});
const updateZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        ids: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
exports.ServiceIdValidation = {
    createZodSchema,
    updateZodSchema,
};
