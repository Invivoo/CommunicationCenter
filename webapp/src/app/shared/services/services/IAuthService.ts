import {Observable} from 'rxjs/Observable';
import { User } from '../../models/user.model'; 

export interface IAuthService {
    login(login : string , password : string) : boolean;
    logout() : void ;
    isLoggedIn() : Observable<boolean>;
    getCUrrentUser() : User ;
    redirectAfterSuccess : string;
    redirectAfterFail : string; 
    localStorageLabel : string;
    redirectToProfile : string ;
}