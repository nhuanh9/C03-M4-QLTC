
import {Router} from "express";
import TradeRouter from "./tradeRouter";
import UserRouter from "./userRouter";


const router = Router();
router.use('/trade', TradeRouter);
router.use('/user', UserRouter);

export default router;