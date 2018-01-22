import { Component, OnInit } from '@angular/core';
import { Login  } from '../../shared/models/login.model'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  login = {
    Login: "",
    Password: ""
}
form_customizeItem (item) {
    if (item.dataField === "Login" || item.dataField === "Password") {
        item.validationRules = [{
            type: "required",
            message: "The value is required"
        }]
    }
}
  constructor() { }

  ngOnInit() {
  }

}
