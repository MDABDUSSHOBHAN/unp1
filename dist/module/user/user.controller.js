"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
const createStudent = async (req, res) => {
    try {
        // Destructure and validate input
        const { password, studentData } = req.body;
        // const { error } = studentValidationSchema.validate({
        //   password,
        //   studentData,
        // });
        // if (error) {
        //   res.status(400).json({
        //     success: false,
        //     message: "Validation failed",
        //     error: error.details, // Return validation error details
        //   });
        // }
        // Call the service to create the student
        const result = await user_service_1.userService.createStudentIntoDB(password, studentData);
        res.status(201).json({
            message: "Student created successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        console.error("Error creating student:", error.message); // Improved error logging
        res.status(500).json({
            message: "An unexpected error occurred",
            success: false,
            error: error.message || "Internal server error",
        });
    }
};
exports.userController = {
    createStudent,
};
