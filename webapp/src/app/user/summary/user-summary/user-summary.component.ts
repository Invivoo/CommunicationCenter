import { Component, OnInit } from '@angular/core';
import { FakeAuthService  } from '../../../shared/services/services/fake.auth.service'
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user.model';
import { Viv , MONTHS } from '../../../shared/models/viv.model';
import { VivVM } from '../../../shared/models/viewModels/viv.viewmodel'; 

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {

  constructor( private auth : FakeAuthService , private router : Router ) { }
  
  private user : User ;
  private vivs : Array<VivVM> = new Array<VivVM>() ;

  ngOnInit() {
    this.user = this.auth.getCUrrentUser(); 
    this.calculateVivsAmout();
  }
  
  calculateVivsAmout(){
    for(var i = 0 ; i < 11;i++) {
       var vpm = this.user.Vivs.filter(function(el){ return el.Month == MONTHS[i]});
       var amt = vpm.reduce(add,0);
       var vm = new VivVM(MONTHS[i],amt); 
       this.vivs.push(vm); 
    }

    function add(a, b : Viv) {
      return a + b.Amount;
    }
  }
}

