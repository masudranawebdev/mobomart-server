"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberService = void 0;
const teamMember_model_1 = require("./teamMember.model");
const insertIntoDB = async (data) => {
    const result = await teamMember_model_1.TeamMember.create(data);
    return result;
};
const getAllData = async () => {
    const result = await teamMember_model_1.TeamMember.find({});
    return result;
};
const getSingleData = async (id) => {
    const result = await teamMember_model_1.TeamMember.findById(id);
    return result;
};
const updateById = async (id, payload) => {
    const filter = { _id: id };
    const update = Object.assign({}, payload);
    const options = { new: true };
    const result = await teamMember_model_1.TeamMember.findOneAndUpdate(filter, update, options);
    return result;
};
const deleteById = async (id) => {
    const result = await teamMember_model_1.TeamMember.deleteOne({ _id: id });
    return result;
};
exports.TeamMemberService = {
    getSingleData,
    insertIntoDB,
    getAllData,
    deleteById,
    updateById,
};
