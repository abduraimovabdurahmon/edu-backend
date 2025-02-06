"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const express_1 = require("express");
const UserService_1 = require("../service/UserService");
class UserController {
    constructor() {
        this.router = (0, express_1.Router)();
        this.userService = new UserService_1.UserService();
        this.initializeRoutes();
    }
    initializeRoutes() {
    }
}
exports.UserController = UserController;
