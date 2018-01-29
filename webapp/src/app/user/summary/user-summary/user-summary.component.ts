import { Component, OnInit } from '@angular/core';
import { FakeAuthService  } from '../../../shared/services/services/fake.auth.service'
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user.model';
import { Viv , MONTHS } from '../../../shared/models/viv.model';
import { VivVM } from '../../../shared/models/viewModels/viv.viewmodel'; 
import { UserVivService } from '../../../shared/services/services/vivs/user.viv.service';
import { UserHolidayService } from '../../../shared/services/services/holidays/user.holiday.service';
import { HolidayVM } from '../../../shared/models/viewModels/holiday.viewmodel';
import { Holiday } from '../../../shared/models/holiday.model';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {

  constructor( private auth : FakeAuthService , 
              private router : Router, 
              private vs : UserVivService,
              private hs : UserHolidayService
            ) { }
  
  private user : User ;
  private vivs : Array<VivVM> ;
  private holidays : Array<HolidayVM>;

  ngOnInit() {
    this.user = this.auth.getCUrrentUser(); 
    this.vs.calculateTotalVivsPerMonth(this.user.Vivs).subscribe( data  => this.vivs = data);
    this.hs.calculateCumulatedHolidaysPerMonth(this.user.Holidays as Array<Holiday>).subscribe(data => this.holidays = data) ;  
  }
  
}

