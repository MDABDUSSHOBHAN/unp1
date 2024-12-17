import { object } from "joi";
import config from "../../app/config";
import { Student } from "../student/student.interface";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { StudentModel } from "../student/student.model";

const createStudentIntoDB = async (password: string, studentData: Student) => {
  // const result = await User.create(studentData);
  // return result;

  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string); // password section of userData...

  userData.role = "student";
  // set manually genearted id
  userData.id = "20300";

  // create a user
  const result = await User.create(userData);

  //create a student
  if (Object.keys(result).length) {
    studentData.id = result.id;
    studentData.user = result._id; //referance _id
    const newStudent = await StudentModel.create(studentData);

    return newStudent;
  }

  return result;
};

export const userService = {
  createStudentIntoDB,
};
