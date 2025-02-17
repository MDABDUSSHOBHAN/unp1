"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config"));
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = 5000;
let server;
async function bootstrap() {
    // this is for database connection of my database
    await mongoose_1.default.connect(config_1.default.database_url);
    server = app_1.default.listen(config_1.default.port, () => {
        console.log(`Example app listening on port ${config_1.default.port}`);
    });
}
bootstrap();
