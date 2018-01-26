export class Viv {
    ObtentionDate : Date;
    Label : string;
    Comment : string ;
    Amount : number;
    IsValidated : boolean ;
    IsUsed : boolean ;

    constructor(obtentionDate: Date , label : string , comment : string , amount : number , isValidated : boolean , isUsed : boolean){
           this.ObtentionDate = obtentionDate ; 
           this.Label = label ;
           this.Comment = comment ;
           this.Amount = amount;
           this.IsValidated = isValidated;
           this.IsUsed = isUsed ;
    }
}