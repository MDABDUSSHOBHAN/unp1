import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

// router.post("/create-student", StudentControllers.createStudent);
router.post("/create-student", userController.createStudent);

// router.get("/:studentId", StudentControllers.getSingleStudent);

export const userRoutes = router;
