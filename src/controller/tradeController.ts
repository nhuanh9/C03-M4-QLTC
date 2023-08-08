import {Request, Response} from "express";
import TradeService from "../service/tradeService";

class TradeController {
    private tradeService;

    constructor() {
        this.tradeService = TradeService;
    }
    findAll = async (req: Request, res: Response) => {
        res.json(await this.tradeService.getTraders(req));
        // let find='';
        // if(req.query.name){
        //     find = await this.tradeService.nameTrade(req.query.name)
        //     console.log(1)
        // }
        // else if(req.query.date && req.query.type) {
        //     find = await this.tradeService.findDate(req.query.date,req.query.type)
        //     console.log(5)
        // }
        // else if(req.query.type) {
        //     find = await this.tradeService.findByType(req.query.type)
        //     console.log(2)
        // }
        // else if(req.query.minAmount && req.query.maxAmount ) {
        //     find = await this.tradeService.findByRange(Number(req.query.minAmount),Number(req.query.maxAmount))
        //     console.log(3)
        // }
        // else if(req.query.amount) {
        //     find = await this.tradeService.sortAmount(req.query.amount)
        //     console.log(4)
        // }
     
        // else{
        //     find = await this.tradeService.getAll();
        //     console.log(6)
        // }
        // res.json(find);
        // console.log(find)
    }
    addTrade = async (req: Request, res: Response) => { 
        let data = await this.tradeService.addTrade(req.body)
        res.json("thêm thu chi thanh cong");
    }

    findMonth = async (req: Request, res: Response) => { 
        let data = await this.tradeService.findMonth(req.query.month)
        res.json(data);
    }
    
    delete = async(req: Request, res: Response) => {
        let data = await this.tradeService.delete(req.params.id)
        res.json("xóa thành công");
    }
}
export default new TradeController();