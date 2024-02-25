import { Router, Request, Response, NextFunction } from "express";
import UserServices from "./services";
import iController from "../utils/interface/controller";

class UserController implements iController  {
    public path = '/user'
    public router = Router();
    private userServices = new UserServices();
    constructor() {
        this.initRoutes();
    }

    private initRoutes = () => {
        this.router.post(`${this.path}/create`, this.createUser)
    }

    private createUser = (
        req: Request,
        res: Response,
        next: NextFunction,) => {
        try {
            const result = this.userServices.create(req.body)
            res.status(201).send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    }
}

export default UserController