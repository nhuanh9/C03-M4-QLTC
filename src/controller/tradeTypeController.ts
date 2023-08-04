import {Request, Response} from "express";
import TradeTypeService from "../service/tradeTypeService";
import tradeTypeService from "../service/tradeTypeService";

class TradeTypeController{
    private tradeTypeService

    constructor() {
        this.tradeTypeService = tradeTypeService
    }
    getAll = async (req: Request, res:Response)=>{
        let data = await this.tradeTypeService.getAll()
        res.json(data)
    }
    add = async (req:Request , res:Response)=>{
        let data = await this.tradeTypeService.addTradeType(req.body)
        res.json(data)
    }
    delete = async (req:Request , res:Response)=>{
        let data = await this.tradeTypeService.deleteTradeType(req.params.id)
        res.json(data)
    }
    update = async (req:Request, res:Response)=>{
        let data = await this.tradeTypeService.updateTradeType(req.params.id, req.body)
        res.json(data)
    }
    findById = async (req: Request, res: Response) => {
        let  listClassRoom= await tradeTypeService.findById(req.params.id)
        res.json(listClassRoom);
    }
}
export default new TradeTypeController()