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
        }else if(req.query.minAmount && req.query.maxAmount ) {
            find = await this.tradeService.findByRange(Number(req.query.minAmount),Number(req.query.maxAmount))
        }else if(req.query.amount) {
            find = await this.tradeService.sortAmount(req.query.amount)
        }else if(req.query.date ) {
            find = await this.tradeService.findDate(req.query.date)
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