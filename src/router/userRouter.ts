import {Router} from "express";
import userController from "../controller/userController";
// import auth from "../middleware/jwt";

const UserRouter = Router();
// TradeRouter.use(auth)
UserRouter.get('/users', userController.getMoney)


export default UserRouter;