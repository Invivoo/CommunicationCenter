import { Component, OnInit } from '@angular/core';
import { FakeAuthService  } from '../../../shared/services/services/fake.auth.service'
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user.model';
import { VivVM } from '../../../shared/models/viewModels/viv.viewmodel'; 
import { UserHolidayService } from '../../../shared/services/services/holidays/user.holiday.service';
import { HolidayVM } from '../../../shared/models/viewModels/holiday.viewmodel';
import { Holiday } from '../../../shared/models/holiday.model';
import { Location } from '@angular/common'

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {

  constructor( private auth : FakeAuthService , 
              private router : Router,
              private hs : UserHolidayService,
              private location : Location
            ) { }
  
  private user : User ;
  private holidays : Array<HolidayVM>;

  ngOnInit() {
    this.user = this.auth.getCUrrentUser();
     this.hs.getHolidays().subscribe(data => this.updateScreenData(data));
    
  }

  updateScreenData(holidays : Array<Holiday>){
    this.hs.calculateCumulatedHolidaysPerMonth(holidays).subscribe(data => this.holidays = data) ;  
  }

  convert(){
    this.location.go('userVivConvert');
                location.reload();     
  }
  
}

