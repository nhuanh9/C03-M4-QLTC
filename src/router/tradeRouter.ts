import {Router} from "express";
import TradeController from "../controller/tradeController";
// import auth from "../middleware/jwt";

const TradeRouter = Router();
// TradeRouter.use(auth)
TradeRouter.get('', TradeController.getAll)
TradeRouter.post('/AddTrades', TradeController.addTrade)
TradeRouter.get('/:id', TradeController.findTrade)
TradeRouter.put('/:id', TradeController.updateTrade)
TradeRouter.get('/TradeInMonth', TradeController.showTradeInMonth)
TradeRouter.get('/ASC', TradeController.ASC)





export default TradeRouter;