
import {Router} from "express";
import TradeRouter from "./tradeRouter";
import UserRouter from "./userRouter";
import TradeTypeRouter from "./tradeTypeRouter";


const router = Router();
router.use('/trades', TradeRouter);
router.use('', UserRouter);
router.use('/tradeType', TradeTypeRouter);

export default router;