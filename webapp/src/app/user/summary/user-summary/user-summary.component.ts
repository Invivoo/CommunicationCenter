import { Component, OnInit } from '@angular/core';
import { FakeAuthService  } from '../../../shared/services/services/fake.auth.service'
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user.model';
import { Viv , MONTHS } from '../../../shared/models/viv.model';
import { VivVM } from '../../../shared/models/viewModels/viv.viewmodel'; 
import { UserVivService } from '../../../shared/services/services/vivs/user.viv.service'

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {

  constructor( private auth : FakeAuthService , 
              private router : Router, 
              private vs : UserVivService
            ) { }
  
  private user : User ;
  private vivs : Array<VivVM> ;

  ngOnInit() {
    this.user = this.auth.getCUrrentUser(); 
    this.vs.calculateTotalVivsPerMonth(this.user.Vivs).subscribe( data  => this.vivs = data);  
  }
  
}

