import app from "./app";
import { Server } from "http";
import config from "./app/config";
import mongoose from "mongoose";

const PORT = 5000;
let server: Server;

async function bootstrap() {
  // this is for database connection of my database

  await mongoose.connect(config.database_url as string);

  server = app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
}

bootstrap();
