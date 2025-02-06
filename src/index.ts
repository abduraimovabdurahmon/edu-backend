import express from "express";
import { AppDataSource } from "./data-source";
import { UserController } from "./controller/UserController";
import bot from "./bot";

const app = express();
const port = 8000;

app.use(express.json());

const initializeApp = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Connected to the database");

        const userController = new UserController();
        app.use("/api", userController.router);

        app.listen(port, () => {
            bot.launch();
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

initializeApp();
