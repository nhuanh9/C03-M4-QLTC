import { User } from "../entity/user";
import {AppDataSource} from "../data-source";
import { Like } from "typeorm";

class UserService {
    private Repository;
    constructor() {
        this.Repository = AppDataSource.getRepository(User);
    }
    getMoney = async (money) => {
        return await this.Repository.find({
            where : { 
                currentMoney:  money
           }
          
        });
    }
}
export default new UserService();