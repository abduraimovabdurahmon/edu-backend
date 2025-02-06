import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres', 
    host: process.env.DATASOURCE_HOST,
    port: parseInt(process.env.DATASOURCE_PORT || "5432"),
    username: process.env.DATASOURCE_USER,
    password: process.env.DATASOURCE_PASS,
    database: process.env.DATASOURCE_NAME,
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entity/*.ts"],
    migrations: [],
    subscribers: [],
});
