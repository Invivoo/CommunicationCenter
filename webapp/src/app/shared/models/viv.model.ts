export class Viv {
    ObtentionDate : Date;
    Month : number ;
    Label : string;
    Comment : string ;
    Amount : number;
    IsValidated : boolean ;
    IsUsed : boolean ;

    constructor(obtentionDate: Date , label : string , comment : string , amount : number , isValidated : boolean , isUsed : boolean){
           this.ObtentionDate = obtentionDate ;
           this.Month = MONTHS[obtentionDate.getMonth()]; 
           this.Label = label ;
           this.Comment = comment ;
           this.Amount = amount;
           this.IsValidated = isValidated;
           this.IsUsed = isUsed ;
    }
}


export var MONTHS = { 0: "January" , 1 : "February" , 2 : "March" , 3 : "April" , 4 : "May" , 5 : "June" , 6 : "July" , 7 : "August",
             8 : "September" , 9 : "October" , 10 : "November",11 : "December" }