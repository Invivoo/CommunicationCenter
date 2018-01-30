import { Component, OnInit } from '@angular/core';
import { UserVivRequest } from '../../../../shared/models/user.viv.request';
import { UserVivRequestService } from '../../../../shared/services/services/vivs/user.viv.request';

@Component({
  selector: 'app-user-viv-request',
  templateUrl: './user-viv-request.component.html',
  styleUrls: ['./user-viv-request.component.css']
})
export class UserVivRequestComponent implements OnInit {

  constructor(private uvr : UserVivRequestService) { }

  requests : Array<UserVivRequest> ;

  ngOnInit() {
    this.uvr.listRequests().subscribe(data => this.requests = data);
  }

}
