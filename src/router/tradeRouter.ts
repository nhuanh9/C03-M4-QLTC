import {Router} from "express";
import TradeController from "../controller/tradeController";
import tradeController from "../controller/tradeController";
// import auth from "../middleware/jwt";

const TradeRouter = Router();
// TradeRouter.use(auth)
TradeRouter.get('', TradeController.findAll)
TradeRouter.post('/AddTrade', TradeController.addTrade)
TradeRouter.get('/month', TradeController.findMonth)
TradeRouter.get('', TradeController.getAll)
TradeRouter.post('/AddTrades', TradeController.addTrade)
TradeRouter.get('/month', TradeController.searchByMonth)
TradeRouter.get('/amount', TradeController.findAmount)
TradeRouter.get('/search',tradeController.searchByDate)



export default TradeRouter;