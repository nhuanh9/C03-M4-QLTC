// import {Request, Response} from "express";
// import UserService from "../service/userService";
// import userService from "../service/userService";


// class UserController {
//     private userService;

//     constructor() {
//         this.userService = UserService;
//     }

//     getMoney = async (req: Request, res: Response) => { 
//         let data = await this.userService.getMoney(req.query.username)
//         res.json(data);
//     }
//     register = async (req: Request, res: Response) => {
//         await userService.register(req.body);
//         res.status(201).json('Create user success')
//     }

//     login = async (req: Request, res: Response) => {
//         let resultCheck = await userService.checkUser(req.body);
//         res.status(200).json(resultCheck);
//     }
// }
// export default new UserController();