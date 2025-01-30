import { Router, Request, Response } from "express";
import { UserService } from "../service/UserService";

export class UserController {
    public router = Router();
    private userService = new UserService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {

    }

 
}
