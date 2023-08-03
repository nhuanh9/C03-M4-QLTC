import {Router} from "express";
import TradeController from "../controller/tradeController";
// import auth from "../middleware/jwt";

const TradeRouter = Router();
// TradeRouter.use(auth)
TradeRouter.get('', TradeController.findAll)
TradeRouter.post('/AddTrade', TradeController.addTrade)
TradeRouter.get('/month', TradeController.findMonth)






export default TradeRouter;