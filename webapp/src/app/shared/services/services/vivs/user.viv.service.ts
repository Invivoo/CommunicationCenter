import { Injectable } from '@angular/core';
import { VivVM } from '../../../models/viewModels/viv.viewmodel';
import { Viv , MONTHS } from '../../../models/viv.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserVivService {

    constructor(){}
    
    public calculateTotalVivsPerMonth(vivs : Array<Viv>) : Observable<Array<VivVM>> {
        
        var vivsVM = new Array<VivVM>();
        for(var i = 0 ; i < 11;i++) {
            var vpm = vivs.filter(function(el){ return el.Month == MONTHS[i]});
            var uvpm = vpm.filter(function(el){ return el.IsUsed == true;});
            var amt = vpm.reduce(this.add,0);
            var uamt = uvpm.reduce(this.add,0);
            var vm = new VivVM(MONTHS[i],amt,uamt); 
            vivsVM.push(vm); 
         }
         return Observable.of(vivsVM);
    }


    public calculateVivBalance(vivs : Array<Viv> ) : Observable<number> {
        var aviv = vivs.filter(function(el){ return el.IsUsed == false && el.IsValidated == true});
        var balance = aviv.reduce(this.add, 0);
        return Observable.of(balance);
    }
    
    private add(a, b : Viv) {
        return a + b.Amount;
      }    
}