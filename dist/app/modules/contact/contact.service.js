"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const contact_model_1 = require("./contact.model");
const insertIntoDB = async (data) => {
    const result = await contact_model_1.Contact.create(data);
    return result;
};
const getAllData = async () => {
    const result = await contact_model_1.Contact.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await contact_model_1.Contact.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await contact_model_1.Contact.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await contact_model_1.Contact.deleteOne({ _id: id });
    return result;
};
exports.ContactService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
