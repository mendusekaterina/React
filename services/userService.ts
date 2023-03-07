
import {IUser} from "../interfaces/userInterface";
import {apiService} from "./apiService";
import {Ires} from "../interfaces/resInterface";

const userService={
    getAll:():Ires<IUser[]> =>apiService.get('/users')
}
export {userService}