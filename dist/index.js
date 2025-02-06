"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./data-source");
const UserController_1 = require("./controller/UserController");
const bot_1 = __importDefault(require("./bot"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
const initializeApp = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield data_source_1.AppDataSource.initialize();
        console.log("Connected to the database");
        const userController = new UserController_1.UserController();
        app.use("/api", userController.router);
        app.listen(port, () => {
            bot_1.default.launch();
            console.log(`Server running on http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error("Database connection error:", error);
    }
});
initializeApp();
