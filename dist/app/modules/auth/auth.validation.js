"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const loginZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: 'Last Name is Required!',
        })
            .email(),
        password: zod_1.z.string({
            required_error: 'Password is Required!',
        }),
    }),
});
const refeshTokenZodSchema = zod_1.z.object({
    cookies: zod_1.z.object({
        refeshToken: zod_1.z.string({
            required_error: 'RefeshToken is Required',
        }),
    }),
});
const changePasswordZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        oldPassword: zod_1.z.string({
            required_error: 'Old Password is Required!',
        }),
        newPassword: zod_1.z.string({
            required_error: 'New Password is Required!',
        }),
    }),
});
exports.AuthValidation = {
    loginZodSchema,
    refeshTokenZodSchema,
    changePasswordZodSchema,
};
