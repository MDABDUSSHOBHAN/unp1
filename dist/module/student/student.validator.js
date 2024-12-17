"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// UserName Validation Schema
const userNameValidationSchema = joi_1.default.object({
    firstName: joi_1.default.string().required().label("First Name"),
    middleName: joi_1.default.string().optional().allow("").label("Middle Name"),
    lastName: joi_1.default.string().required().label("Last Name"),
});
// Guardian Validation Schema
const guardianValidationSchema = joi_1.default.object({
    fatherName: joi_1.default.string().required().label("Father's Name"),
    fatherOccupation: joi_1.default.string().required().label("Father's Occupation"),
    fatherContactNo: joi_1.default.string()
        .pattern(/^[0-9]{10}$/)
        .required()
        .label("Father's Contact Number"),
    motherName: joi_1.default.string().required().label("Mother's Name"),
    motherOccupation: joi_1.default.string().required().label("Mother's Occupation"),
    motherContactNo: joi_1.default.string()
        .pattern(/^[0-9]{10}$/)
        .required()
        .label("Mother's Contact Number"),
});
// Local Guardian Validation Schema
const localGuardianValidationSchema = joi_1.default.object({
    name: joi_1.default.string().required().label("Local Guardian's Name"),
    occupation: joi_1.default.string().required().label("Local Guardian's Occupation"),
    contactNo: joi_1.default.string()
        .pattern(/^[0-9]{10}$/)
        .required()
        .label("Local Guardian's Contact Number"),
    address: joi_1.default.string().required().label("Local Guardian's Address"),
});
// Student Validation Schema
const studentValidationSchema = joi_1.default.object({
    id: joi_1.default.string().optional().label("Student ID"),
    name: userNameValidationSchema.required().label("Name"),
    gender: joi_1.default.string().valid("male", "female").required().label("Gender"),
    dateOfBirth: joi_1.default.string().isoDate().optional().label("Date of Birth"),
    email: joi_1.default.string().email().required().label("Email"),
    contactNo: joi_1.default.string()
        .pattern(/^[0-9]{10}$/)
        .required()
        .label("Contact Number"),
    emergencyContactNo: joi_1.default.string()
        .pattern(/^[0-9]{10}$/)
        .required()
        .label("Emergency Contact Number"),
    bloogGroup: joi_1.default.string()
        .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
        .optional()
        .label("Blood Group"),
    presentAddress: joi_1.default.string().required().label("Present Address"),
    permanentAddres: joi_1.default.string().required().label("Permanent Address"),
    guardian: guardianValidationSchema.required().label("Guardian"),
    localGuardian: localGuardianValidationSchema
        .required()
        .label("Local Guardian"),
    profileImg: joi_1.default.string().uri().optional().label("Profile Image"),
    isActive: joi_1.default.string().valid("active", "blocked").required().label("Status"),
});
exports.studentValidationSchema = studentValidationSchema;
