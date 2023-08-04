import {Router} from "express";
import TradeController from "../controller/tradeController";
import tradeController from "../controller/tradeController";
import auth from "../middleware/jwt";

const TradeRouter = Router();
TradeRouter.use(auth)
TradeRouter.get('', TradeController.findAll)
<<<<<<< HEAD
TradeRouter.post('/add', TradeController.add)
TradeRouter.delete('/:id', TradeController.delete);
TradeRouter.put('/:id', TradeController.update);
TradeRouter.get('/month', TradeController.findMonth)
=======
TradeRouter.post('/AddTrade', TradeController.addTrade)
TradeRouter.get('/months', TradeController.findMonth)
>>>>>>> 62e0f2d949e6facd7dab8ae66d20a3576ed3507e
TradeRouter.get('', TradeController.getAll)
TradeRouter.get('/month', TradeController.searchByMonth)
TradeRouter.get('/amount', TradeController.findAmount)
TradeRouter.get('/search',tradeController.searchByDate)



export default TradeRouter;