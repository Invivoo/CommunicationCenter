import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { Router } from '@angular/router'
import { VivVM } from '../../../shared/models/viewModels/viv.viewmodel';
import {FakeAuthService} from '../../../shared/services/services/fake.auth.service';
import { UserVivService } from '../../../shared/services/services/vivs/user.viv.service';

@Component({
  selector: 'app-user-viv-curve',
  templateUrl: './user-viv-curve.component.html',
  styleUrls: ['./user-viv-curve.component.css']
})
export class UserVivCurveComponent implements OnInit {

  constructor(private auth : FakeAuthService , 
    private router : Router, 
    private vs : UserVivService) { }
  
  private user : User ;
  private vivs : Array<VivVM> ;

  ngOnInit() {
    this.user = this.auth.getCUrrentUser();
    this.vs.calculateTotalVivsPerMonth(this.user.Vivs).subscribe( data  => this.vivs = data);
  }

}
