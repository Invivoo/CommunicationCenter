import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Holiday } from '../../../models/holiday.model';
import { HolidayVM } from '../../../models/viewModels/holiday.viewmodel';
import { MONTHS  } from '../../../models/viv.model';
import { FakeAuthService  } from '../fake.auth.service';
import 'rxjs/add/observable/of';

@Injectable()
export class UserHolidayService {
    
      constructor(private fa : FakeAuthService){}
      
      public getHolidays() : Observable<Array<Holiday>> {
            return  Observable.of(this.fa.getCUrrentUser().Holidays);

      }

      public calculateCumulatedHolidaysPerMonth( holidays : Array<Holiday> ) : Observable<Array<HolidayVM>>  {
            var holidaysVM = new Array<HolidayVM>();
            
            for(var i =0 ; i < 11;i++){
                var cppm = holidays.filter(function(el){ return (el.Month <= i) && ( el.IsCPP == true)});
                var cppAmt = cppm.reduce(this.add,0);
                var rttm = holidays.filter(function(el){ return (el.Month <= i) && ( el.IsRTT == true)});
                var rttAmt = rttm.reduce(this.add,0);
                var hvm = new HolidayVM(MONTHS[i],cppAmt,rttAmt); 
                holidaysVM.push(hvm); 

            }
            
            console.log(holidaysVM);
            return Observable.of(holidaysVM);
      }

      private add(a, b : Holiday) {
        return a + b.Amount;
      }
}