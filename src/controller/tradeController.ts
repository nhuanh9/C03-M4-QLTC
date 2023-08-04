import {Request, Response} from "express";
import TradeService from "../service/tradeService";
import tradeService from "../service/tradeService";


class TradeController {
    private tradeService;

    constructor() {
        this.tradeService = TradeService;
    }
    findAll = async (req: Request, res: Response) => {
        let find = '';
        if (req.query.name) {
            find = await this.tradeService.nameTrade(req.query.name)
            console.log(1)
        } else if (req.query.date && req.query.type) {
            find = await this.tradeService.findDate(req.query.date, req.query.type)
            console.log(5)
        } else if (req.query.type) {
            find = await this.tradeService.findByType(req.query.type)
            console.log(2)
        } else if (req.query.minAmount && req.query.maxAmount) {
            find = await this.tradeService.findByRange(Number(req.query.minAmount), Number(req.query.maxAmount))
            console.log(3)
        } else if (req.query.amount) {
            find = await this.tradeService.sortAmount(req.query.amount)
            console.log(4)
        } else {
            find = await this.tradeService.getAll();
            console.log(6)
        }
        res.json(find);
        console.log(find)
    }

    getAll = async (req: Request, res: Response) => {
        let data = await this.tradeService.getAll()
        res.json(data);
    }
    add = async (req: Request, res: Response) => {
        let data = await this.tradeService.add(req.body)
        res.json("thêm thu chi thanh công");
    }
    update = async (req, res) => {
        let data = await this.tradeService.update(req.params.id, req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await this.tradeService.delete(req.params.id);
        console.log(data)
        res.json(data)
    }
    findById = async (req, res) => {
        let data = await this.tradeService.findById(req.params.id);
        res.json(data)
    }



    findMonth = async (req: Request, res: Response) => { 
        let data = await this.tradeService.findMonth(req.query.month)
        res.json(data);
    }

    findTradeToday = async (req: Request, res: Response) => {
        let data = await this.tradeService.search(req.body)
        res.json(data);
    }
    findAmount = async (req: Request, res: Response) => {
        let data = await this.tradeService.findAmount(req.query.amount)
        res.json(data);
    }
    searchByDate = async (req: Request, res: Response) => {
        let data = await this.tradeService.findByDate(req.query.date)
        res.json(data)
    }
    searchByMonth = async (req: Request, res: Response) => {
        let data = await this.tradeService.findByMonth(req.query.month)
        res.json(data)
    }

}
export default new TradeController();