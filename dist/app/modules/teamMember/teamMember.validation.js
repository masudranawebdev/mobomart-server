"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        profileImg: zod_1.z.string({ required_error: 'Profile Image is Required!' }),
        designation: zod_1.z.string({ required_error: 'Designation is Required!' }),
        fullName: zod_1.z.string({ required_error: 'Full Name is Required!' }),
        bio: zod_1.z.string({ required_error: 'Bio is Required!' }),
        facebookLink: zod_1.z.string().optional(),
        twitterLink: zod_1.z.string().optional(),
        linkedinLink: zod_1.z.string().optional(),
        youtubeLink: zod_1.z.string().optional(),
    }),
});
const updateZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        profileImg: zod_1.z.string().optional(),
        designation: zod_1.z.string().optional(),
        fullName: zod_1.z.string().optional(),
        bio: zod_1.z.string().optional(),
        facebookLink: zod_1.z.string().optional(),
        twitterLink: zod_1.z.string().optional(),
        linkedinLink: zod_1.z.string().optional(),
        youtubeLink: zod_1.z.string().optional(),
    }),
});
exports.TeamMemberValidation = { createZodSchema, updateZodSchema };
