import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {IAuthService} from './IAuthService';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { User } from '../../models/user.model';
import { Viv } from '../../models/viv.model';

@Injectable()
export class FakeAuthService implements IAuthService  {
    
    private loggedIn : boolean = false ;
    public redirectAfterSuccess = '/userSummary';
    public redirectAfterFail = '/userLogin'; 
    public localStorageLabel = 'currentUser';

    constructor() { }

    private fakeUser = new User();

    initializeFakeUser() : void{

        var vivs = new Array<Viv>();
        vivs.push(new Viv(new Date(),'Job Interview','Interview with Person',10,true,false)); 
        vivs.push(new Viv(new Date(),'Article','Article About front end expertise',10,true,false)); 
        vivs.push(new Viv(new Date(),'Interview','Interview with a new agent',10,true,false)); 

        this.fakeUser.Name = 'INVIVOO';
        this.fakeUser.Surname = 'Admin';
        this.fakeUser.Login = 'INVIVOO - Admin';
        this.fakeUser.Vivs = vivs; 
    }

    login(login : string , password ) : boolean {
          

             if(login == 'admin' && password == 'admin'){
                this.initializeFakeUser();
                localStorage.setItem(this.localStorageLabel, JSON.stringify(this.fakeUser));  
                this.loggedIn = true ;
                return true ; 
             }
             else {
                 alert('failed to log in please check your credentials');
                 return false ;
             }
     }

     logout() : void {
        localStorage.removeItem(this.localStorageLabel);
        this.loggedIn = false ;
        this.isLoggedIn();
     }

     isLoggedIn() : Observable<boolean> {
         return Observable.of(!!localStorage.getItem(this.localStorageLabel)) ;
     }

     getCUrrentUser() : User {
         if(!!localStorage.getItem(this.localStorageLabel)){
            var user = <User>JSON.parse(localStorage.getItem(this.localStorageLabel));
            return user ;
         }

         return new User();
         
     }
}