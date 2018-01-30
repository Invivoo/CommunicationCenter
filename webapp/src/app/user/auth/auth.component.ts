import { Component, OnInit } from '@angular/core';
import { Login  } from '../../shared/models/login.model'
import { FakeAuthService } from '../../shared/services/services/fake.auth.service'
import { Router } from '@angular/router';
import { Location } from "@angular/common";

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

  constructor(private auth : FakeAuthService,private router: Router ,private location : Location) { }

  submitLogin(){
    if((this.login.Login !== "") && (this.login.Password !== "")) {
            if(this.auth.login(this.login.Login,this.login.Password)){
                this.location.go(this.auth.redirectAfterSuccess);
                location.reload();        
            }
        }
    }

}
