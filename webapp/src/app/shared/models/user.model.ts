import { Viv } from './viv.model';
import { Holiday } from './holiday.model';

export class User {
    Name : string ;
    Surname : string ; 
    Login : string;
    Vivs : Array<Viv>;
    Holidays : Array<Holiday>
}