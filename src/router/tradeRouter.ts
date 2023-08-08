import {Router} from "express";
import TradeController from "../controller/tradeController";
// import auth from "../middleware/jwt";

const TradeRouter = Router();
// TradeRouter.use(auth)
TradeRouter.get('/findId', TradeController.findById)
TradeRouter.get('', TradeController.findAll)
TradeRouter.post('', TradeController.addTrade)
TradeRouter.get('/month', TradeController.findMonth)
TradeRouter.delete('/:id', TradeController.delete)
TradeRouter.put('/:id', TradeController.update)

export default TradeRouter;