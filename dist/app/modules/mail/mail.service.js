"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const mail_model_1 = require("./mail.model");
// import mailchimp from '@mailchimp/mailchimp_transactional';
// import config from '../../../config';
const insertIntoDB = async (data) => {
    // const { email } = data;
    // const client = mailchimp({ apiKey: config.secret_key as string });
    // const message = {
    //   subject: 'Hello from Mailchimp Transactional!',
    //   from_email: email,
    //   to: [
    //     {
    //       email: 'abdullainfo30@gmail.com',
    //       type: 'to',
    //     },
    //   ],
    //   html: '<p>This is a test email sent via Mailchimp Transactional.</p>',
    // };
    // try {
    //   const response = await client.messages.send({ message });
    //   console.log('Email sent:', response);
    //   // You can proceed with database insertion here
    //   // const result = await Mail.create(data);
    //   return data; // Returning the data as an example
    // } catch (error) {
    //   console.error('Error sending email:', error);
    //   throw error; // Rethrow the error if needed
    // }
    const result = await mail_model_1.Mail.create(data);
    return result;
};
const getAllData = async (paginationOptions) => {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const sortCondition = {};
    if (sortBy && sortOrder) {
        sortCondition[sortBy] = sortOrder;
    }
    const total = await mail_model_1.Mail.countDocuments();
    const result = await mail_model_1.Mail.find({})
        .sort(sortCondition)
        .skip(skip)
        .limit(limit);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
};
const countAllData = async () => {
    const result = await mail_model_1.Mail.countDocuments();
    return result;
};
const getSingleData = async (id) => {
    const result = await mail_model_1.Mail.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await mail_model_1.Mail.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await mail_model_1.Mail.deleteOne({ _id: id });
    return result;
};
exports.MailService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
    countAllData,
};
