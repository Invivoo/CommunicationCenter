import {Observable} from 'rxjs/Observable';

export interface IAuthService {
    login(login : string , password : string) : boolean;
    logout() : void ;
    isLoggedIn() : Observable<boolean>;
}