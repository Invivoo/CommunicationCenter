import { Component, Input , OnChanges } from '@angular/core';
import { FakeAuthService   } from '../../services/services/fake.auth.service'
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Location } from "@angular/common";

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges, OnInit {
  
  isLoggedIn : boolean ;  ;

  constructor(private auth : FakeAuthService , private location : Location  ) { }

  logout(){
    this.auth.logout();
    this.location.go(this.auth.redirectAfterFail);
    location.reload();
  }

  ngOnChanges(changes) {
    this.auth.isLoggedIn().subscribe(res => function(res) {console.log('value changes detected'); this.isLoggedIn = res;});
  }

  ngOnInit() {
       this.auth.isLoggedIn().subscribe(res => function(res) {console.log('value changes detected'); this.isLoggedIn = res;});
  }

}
