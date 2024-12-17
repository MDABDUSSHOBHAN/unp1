"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./module/user/user.route");
// import { StudentRoutes } from "./module/student/student.route";
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
// app.use("/api/v1/students", userRoutes);
app.use("/api/v1/users", user_route_1.userRoutes);
// const getAController = (req: Request, res: Response) => {
//   const a = 10;
//   res.send(a);
// };
// app.get("/", StudentRoutes);
app.get("/", (req, res) => {
    res.send("Hello Sowtware Engineer!");
});
exports.default = app;
