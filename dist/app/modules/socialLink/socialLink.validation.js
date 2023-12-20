"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialLinkValidation = void 0;
const zod_1 = require("zod");
const createZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        whatsappLink: zod_1.z.string({ required_error: 'Whatsapp Link is Required!' }),
        facebookLink: zod_1.z.string({ required_error: 'Facebook Link is Required!' }),
        twitterLink: zod_1.z.string({ required_error: 'twitter Link is Required!' }),
        linkedinLink: zod_1.z.string({ required_error: 'linkedin Link is Required!' }),
        youtubeLink: zod_1.z.string({ required_error: 'youtube Link is Required!' }),
    }),
});
exports.SocialLinkValidation = {
    createZodSchema,
};
