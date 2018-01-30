import { Injectable } from '@angular/core';
import { UserVivRequest  } from '../../../models/user.viv.request' ;
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserVivRequestService {
   
    public create() : boolean {
         return true ; 
    } 

    public listRequests() : Observable<Array<UserVivRequest>> {
         var requests = new Array<UserVivRequest>();
        requests.push(new UserVivRequest(new Date(),50,'Holidays',1,'Pending'));
        requests.push(new UserVivRequest(new Date(),50,'Money',250,'Confirmed'));
        requests.push(new UserVivRequest(new Date(),150,'Money',750,'Confirmed'));
        requests.push(new UserVivRequest(new Date(),100,'Holidays',2,'Pending'));
        requests.push(new UserVivRequest(new Date(),50,'Money',250,'Confirmed'));
        requests.push(new UserVivRequest(new Date(),150,'Money',750,'Confirmed'));
        return Observable.of(requests) ;
    }

}