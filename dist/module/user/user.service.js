"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const config_1 = __importDefault(require("../../app/config"));
const user_model_1 = require("./user.model");
const student_model_1 = require("../student/student.model");
const createStudentIntoDB = async (password, studentData) => {
    // const result = await User.create(studentData);
    // return result;
    const userData = {};
    userData.password = password || config_1.default.default_password; // password section of userData...
    userData.role = "student";
    // set manually genearted id
    userData.id = "20300";
    // create a user
    const result = await user_model_1.User.create(userData);
    //create a student
    if (Object.keys(result).length) {
        studentData.id = result.id;
        studentData.user = result._id; //referance _id
        const newStudent = await student_model_1.StudentModel.create(studentData);
        return newStudent;
    }
    return result;
};
exports.userService = {
    createStudentIntoDB,
};
