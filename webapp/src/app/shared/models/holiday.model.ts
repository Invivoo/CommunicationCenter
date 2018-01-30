import { MONTHS } from './viv.model'

export class Holiday {
   Month : number ;
   Amount : number ;
   IsCPP : boolean;
   IsRTT : boolean;

   constructor(month : number , amount : number , cpp : boolean){
        this.Month = month;
        this.Amount = amount ;
        this.IsCPP = cpp ;
        this.IsRTT = !cpp;
   }
}