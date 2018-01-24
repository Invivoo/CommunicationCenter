import { Component, OnInit } from '@angular/core';
import { Login  } from '../../shared/models/login.model'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

    login : Login = {
        Login: "",
        Password: ""
    }

  constructor() { }

  submitLogin(){
    if((this.login.Login !== "") && (this.login.Password !== "")) {
            /*  TODO : Insert longin logic here  */
        }
    }

}
