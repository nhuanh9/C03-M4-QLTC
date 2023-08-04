import {Request, Response} from "express";
import UserService from "../service/userService";


class UserController {
    private userService;

    constructor() {
        this.userService = UserService;
    }

    getMoney = async (req: Request, res: Response) => { 
        let data = await this.userService.getMoney(req.query.username)
        res.json(data);
          
    }
}
export default new UserController()