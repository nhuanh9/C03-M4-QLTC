
import {Router} from "express";
import TradeRouter from "./tradeRouter";
import UserRouter from "./userRouter";


const router = Router();
router.use('/trades', TradeRouter);
router.use('', UserRouter);

export default router;