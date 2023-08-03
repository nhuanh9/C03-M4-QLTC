import {Request, Response} from "express";
import TradeService from "../service/tradeService";


class TradeController {
    private tradeService;

    constructor() {
        this.tradeService = TradeService;
    }
    findAll = async (req: Request, res: Response) => {
        let find='';
        if(req.query.name){
            find = await this.tradeService.nameTrade(req.query.name)
        }else if(req.query.type) {
            find = await this.tradeService.findByType(req.query.type)
        }
        else{
            find = await this.tradeService.getAll();
        }
        res.json(find);
        console.log(find)
    }
    addTrade = async (req: Request, res: Response) => { 
        let data = await this.tradeService.addTrade(req.body)
        res.json("thêm thu chi thanh cong");
    }

}
export default new TradeController();