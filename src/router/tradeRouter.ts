import {Router} from "express";
import TradeController from "../controller/tradeController";
// import auth from "../middleware/jwt";

const TradeRouter = Router();
// TradeRouter.use(auth)
TradeRouter.get('', TradeController.getAll)
TradeRouter.post('/AddTrades', TradeController.addTrade)




export default TradeRouter;