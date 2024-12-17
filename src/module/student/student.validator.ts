import Joi from "joi";

// UserName Validation Schema
const userNameValidationSchema = Joi.object({
  firstName: Joi.string().required().label("First Name"),
  middleName: Joi.string().optional().allow("").label("Middle Name"),
  lastName: Joi.string().required().label("Last Name"),
});

// Guardian Validation Schema
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().label("Father's Name"),
  fatherOccupation: Joi.string().required().label("Father's Occupation"),
  fatherContactNo: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .label("Father's Contact Number"),
  motherName: Joi.string().required().label("Mother's Name"),
  motherOccupation: Joi.string().required().label("Mother's Occupation"),
  motherContactNo: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .label("Mother's Contact Number"),
});

// Local Guardian Validation Schema
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().label("Local Guardian's Name"),
  occupation: Joi.string().required().label("Local Guardian's Occupation"),
  contactNo: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .label("Local Guardian's Contact Number"),
  address: Joi.string().required().label("Local Guardian's Address"),
});

// Student Validation Schema
const studentValidationSchema = Joi.object({
  id: Joi.string().optional().label("Student ID"),
  name: userNameValidationSchema.required().label("Name"),
  gender: Joi.string().valid("male", "female").required().label("Gender"),
  dateOfBirth: Joi.string().isoDate().optional().label("Date of Birth"),
  email: Joi.string().email().required().label("Email"),
  contactNo: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .label("Contact Number"),
  emergencyContactNo: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .label("Emergency Contact Number"),
  bloogGroup: Joi.string()
    .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
    .optional()
    .label("Blood Group"),
  presentAddress: Joi.string().required().label("Present Address"),
  permanentAddres: Joi.string().required().label("Permanent Address"),
  guardian: guardianValidationSchema.required().label("Guardian"),
  localGuardian: localGuardianValidationSchema
    .required()
    .label("Local Guardian"),
  profileImg: Joi.string().uri().optional().label("Profile Image"),
  isActive: Joi.string().valid("active", "blocked").required().label("Status"),
});

export { studentValidationSchema };
