import { Router, Request, Response } from "express";
import { UserService } from "../service/UserService";

export class UserController {
    public router = Router();
    private userService = new UserService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/test", (req: Request, res: Response) => {
            res.json({ message: "UserController is working!" });
        });
    }
    

 
}
