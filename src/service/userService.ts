import { User } from "../entity/user";
import {AppDataSource} from "../data-source";
import { Like } from "typeorm";

class UserService {
    private Repository;
    constructor() {
        this.Repository = AppDataSource.getRepository(User);
    }
    getMoney = async (name) => {
        return await this.Repository.find({
            where : { 
                username:  name
           }
          
        });
    }
}
export default new UserService();