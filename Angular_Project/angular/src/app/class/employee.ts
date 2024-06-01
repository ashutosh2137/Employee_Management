import e from "express";

export class Employee {
   
     id:Number;
     firstName:String;
     lastName:String;
     emailId:String;
    constructor(id:Number=0,firstName:String='',lastName:String='',emailId:String=''){

        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.emailId=emailId;
    }
    
}
