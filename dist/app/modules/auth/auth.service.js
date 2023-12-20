"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const user_model_1 = require("../user/user.model");
const jwtHelper_1 = require("../../../helpers/jwtHelper");
const config_1 = __importDefault(require("../../../config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const loginUser = async (payload) => {
    const { email, password } = payload;
    const isUserExist = await user_model_1.User.findOne({ email });
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, false, "user can't find");
    }
    if (isUserExist.password &&
        !(await bcrypt_1.default.compare(password, isUserExist.password))) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, false, "password doesn't match");
    }
    const { id, role, email: userEmail } = isUserExist;
    const accessToken = jwtHelper_1.jwtHelper.createToken({ id, role, userEmail }, config_1.default.jwt.access_secret, { expiresIn: config_1.default.jwt.access_expires });
    const refeshToken = jwtHelper_1.jwtHelper.createToken({ id, role, userEmail }, config_1.default.jwt.refesh_secret, { expiresIn: config_1.default.jwt.refesh_expires });
    return {
        accessToken,
        refeshToken,
    };
};
const refeshToken = async (token) => {
    let verifiedToken = null;
    try {
        verifiedToken = jwtHelper_1.jwtHelper.verifyToken(token, config_1.default.jwt.access_secret);
    }
    catch (err) {
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, false, 'invalid refesh token');
    }
    const { userEmail } = verifiedToken;
    //cheking user has or deleted
    const isUserExist = await user_model_1.User.findOne({ email: userEmail });
    if (!isUserExist) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, false, 'user does not exist');
    }
    const { id: user_id, role } = isUserExist;
    //generate new token
    const newAccessToken = jwtHelper_1.jwtHelper.createToken({
        id: user_id,
        role,
    }, config_1.default.jwt.access_secret, {
        expiresIn: config_1.default.jwt.access_expires,
    });
    return {
        accessToken: newAccessToken,
    };
};
const changePassword = async (userId, oldPassword, newPassword) => {
    const user = await user_model_1.User.findById({ _id: userId });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, false, 'user not found');
    }
    const isPasswordMatch = await bcrypt_1.default.compare(oldPassword, user.password);
    if (!isPasswordMatch) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, false, 'Old password is not match');
    }
    const hashNewPassword = await bcrypt_1.default.hash(newPassword, Number(config_1.default.bcrypt_salt_round));
    const filter = { _id: user.id };
    const update = { password: hashNewPassword };
    const options = { new: true };
    const result = await user_model_1.User.findOneAndUpdate(filter, update, options);
    return result;
};
exports.AuthService = {
    loginUser,
    refeshToken,
    changePassword,
};
