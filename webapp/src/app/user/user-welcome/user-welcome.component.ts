import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'invivoo-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.css']
})
export class UserWelcomeComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  redirectLogin() : void {
      this._router.navigateByUrl('/userLogin');
  
  }

}
