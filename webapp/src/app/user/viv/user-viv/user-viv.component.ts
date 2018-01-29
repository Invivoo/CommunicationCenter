import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from '../../../shared/services/services/fake.auth.service';
import { User } from '../../../shared/models/user.model';
import { UserVivService } from '../../../shared/services/services/vivs/user.viv.service';
import { Viv } from '../../../shared/models/viv.model';
import { UserVivRequestModel } from '../../../shared/models/viewModels/userVivRequest.viemodel';
import { UserHolidayService } from '../../../shared/services/services/holidays/user.holiday.service';

@Component({
  selector: 'app-user-viv',
  templateUrl: './user-viv.component.html',
  styleUrls: ['./user-viv.component.css']
})
export class UserVivComponent implements OnInit {

  constructor( private auth : FakeAuthService , private vs : UserVivService ) { }

  private user : User ; 
  private vivAmount : number = 0;
  private amountToChange : number = 0 ;
  private vivs : Array<Viv> ;
  formVM : UserVivRequestModel = new UserVivRequestModel();
  types : any[] = [{ name : 'Money' , value : 'MONEY' },{ name : 'Holidays' , value : 'HOLIDAYS' }]

  radioGroupItems = [ 'Holidays' , 'Money'];

  ngOnInit() {
    this.user = this.auth.getCUrrentUser();
    this.vs.calculateVivBalance(this.user.Vivs).subscribe(val => this.vivAmount = val);
    this.vivs = this.user.Vivs;
  }

}
