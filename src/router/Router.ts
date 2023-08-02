
import {Router} from "express";
import TradeRouter from "./tradeRouter";


const router = Router();
router.use('/trade', TradeRouter);

export default router;