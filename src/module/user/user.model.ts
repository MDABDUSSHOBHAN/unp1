import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import { required } from "joi";

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
    },

    password: {
      type: String,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ["student", "faculty", "admin"],
    },

    status: {
      type: String,
      enum: ["in-progress", "blocked"],
      default: "in-progress",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// creating user model

export const User = model<TUser>("user", userSchema);
