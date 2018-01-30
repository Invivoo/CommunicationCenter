
export class UserVivRequest {
     RequestDate : Date;
     VivAmount : number ;
     Method : string ;
     Reward : number ;
     State : string ;
    
    public constructor(date : Date , amount : number, method : string , reward : number , state : string){
        this.RequestDate = date ; 
        this.VivAmount = amount ;
        this.Method = method ;
        this.Reward = reward;
        this.State = state ;    
    }

} 