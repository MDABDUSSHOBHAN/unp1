import { z } from "zod";
export const userValidationSchema = z.object({
  // id: z.string({
  //   required_error: "User ID is required",
  // }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .max(20, "Password cannot be more than 20 characters")
    .optional(), // Enforce max length of 20
  // needsPasswordChange: z.boolean().optional().default(true),
  // role: z.enum(["student", "faculty", "admin"], {
  //   invalid_type_error: "Role must be one of 'student', 'faculty', or 'admin'",
  // }),
  // status: z.enum(["in-progress", "blocked"]).optional(),
  // isDeleted: z.boolean().optional().default(false),
});
