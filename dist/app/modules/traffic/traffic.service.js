"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficService = void 0;
const traffic_model_1 = require("./traffic.model");
const create = async () => {
    const isExistTraffic = await traffic_model_1.Traffic.find();
    if (isExistTraffic.length === 0) {
        const users = 0;
        const data = { users };
        const result = await traffic_model_1.Traffic.create(data);
        return result;
    }
    else {
        const traffic = isExistTraffic[0];
        const { users, _id } = traffic;
        // Increment the users count
        const count = users + 1;
        const filter = { _id };
        const update = { users: count };
        const options = { new: true };
        const result = await traffic_model_1.Traffic.findOneAndUpdate(filter, update, options);
        return result;
    }
};
const traffics = async () => {
    const result = await traffic_model_1.Traffic.find({});
    return result;
};
exports.TrafficService = { create, traffics };
