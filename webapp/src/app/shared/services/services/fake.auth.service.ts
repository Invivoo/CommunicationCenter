import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {IAuthService} from './IAuthService';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()

export class FakeAuthService implements IAuthService  {
    
    private loggedIn : boolean = false ;
    public redirectAfterSuccess = '/userSummary';
    public redirectAfterFail = '/userLogin'; 

    constructor() { }

    login(login : string , password ) : boolean {

             if(login == 'admin' && password == 'admin'){
                localStorage.setItem('currentUser', 'Admin');  
                this.loggedIn = true ;  
                return true ; 
             }
             else {
                 alert('failed to log in please check your credentials');
                 return false ;
             }
     }

     logout() : void {
        localStorage.removeItem('currentUser');
        this.loggedIn = false ;
        this.isLoggedIn();
     }

     isLoggedIn() : Observable<boolean> {
         return Observable.of(!!localStorage.getItem('currentUser')) ;
     }
}