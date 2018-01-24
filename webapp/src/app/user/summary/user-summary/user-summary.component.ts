import { Component, OnInit } from '@angular/core';
import { FakeAuthService  } from '../../../shared/services/services/fake.auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {

  constructor( private auth : FakeAuthService , private router : Router ) { }

  ngOnInit() {
  }


}
