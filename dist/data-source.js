"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: process.env.DATASOURCE_TYPE,
    host: process.env.DATASOURCE_HOST || "localhost",
    port: parseInt(process.env.DATASOURCE_PORT || "5432"),
    username: process.env.DATASOURCE_USER,
    password: process.env.DATASOURCE_PASS,
    database: process.env.DATASOURCE_NAME || "postgres",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entity/*.ts"],
    migrations: [],
    subscribers: [],
});
