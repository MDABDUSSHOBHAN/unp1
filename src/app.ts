import cors from "cors";
import express, { Application, Request, Response } from "express";
import { userRoutes } from "./module/user/user.route";
// import { StudentRoutes } from "./module/student/student.route";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
// app.use("/api/v1/students", userRoutes);

app.use("/api/v1/users", userRoutes);

// const getAController = (req: Request, res: Response) => {
//   const a = 10;
//   res.send(a);
// };

// app.get("/", StudentRoutes);

app.get("/", (req, res) => {
  res.send("Hello Sowtware Engineer!");
});

export default app;
