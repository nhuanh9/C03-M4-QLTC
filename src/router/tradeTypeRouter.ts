import TradeTypeController from "../controller/tradeTypeController";
import {Router} from "express";

const TradeTypeRouter = Router()
TradeTypeRouter.get('',TradeTypeController.getAll)
TradeTypeRouter.post('/AddTradeType',TradeTypeController.add)
TradeTypeRouter.delete('/:id',TradeTypeController.delete)
TradeTypeRouter.put('/:id',TradeTypeController.update)
TradeTypeRouter.get('/:id',TradeTypeController.findById)

export default TradeTypeRouter