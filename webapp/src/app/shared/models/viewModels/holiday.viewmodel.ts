export class HolidayVM {
    Month : string ;
    CPPAmount : number ;
    RTTAmount : number ;
    
    constructor(month : string , cppAmount : number , rttAmount : number){
        this.Month = month ;
        this.CPPAmount = cppAmount ;
        this.RTTAmount = rttAmount ;
    }
}