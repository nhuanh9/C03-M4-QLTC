import {Request, Response} from "express";
import TradeService from "../service/tradeService";


class TradeController {
    private tradeService;

    constructor() {
        this.tradeService = TradeService;
    }

    getAll = async (req: Request, res: Response) => { 
        let data = await this.tradeService.getAll()
        res.json(data);
    }
    addTrade = async (req: Request, res: Response) => { 
        let data = await this.tradeService.addTrade(req.body)
        res.json("thêm thu chi thanh cong");
    }
}
export default new TradeController();