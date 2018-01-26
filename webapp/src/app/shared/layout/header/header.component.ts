import { Component, Input} from '@angular/core';
import { FakeAuthService   } from '../../services/services/fake.auth.service'
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  isLoggedIn : boolean ;  ;

  constructor(private auth : FakeAuthService , private location : Location  ) { }

  logout(){
    this.auth.logout();
    this.location.go(this.auth.redirectAfterFail);
    location.reload();
  }
}
