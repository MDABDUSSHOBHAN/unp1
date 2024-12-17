// this is the primary field of user model

export type TUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: "admin" | "student" | "faculty";
  status: "in-progress" | "blocked";
  isDeleted: boolean;
};

//this is the all field for university managment project ....

// export type NewUser = {
//   password: string;
//   role: string;
//   id: string;
// };
