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
    findTrade = async (req,res)=>{
        let data = await  this.tradeService.find(req.params.id);
        res.json(data)
    }
    updateTrade = async (req: Request, res: Response) => {
        let data = await this.tradeService.update(req.params.id, req.body);
        res.json(data)
    }
    showTradeInMonth = async (req: Request, res: Response) =>{
        let data = await  this.tradeService.showTradeInMonth(req.params.id)
        res.json(data)
    }
    ASC = async (req: Request, res: Response) => {
        let data = await this.tradeService.ASC();
        res.json(data);
    }

}
export default new TradeController();