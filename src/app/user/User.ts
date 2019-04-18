
export class User{
    id:number;
    firstName:String;
    lastName:String;
    username:String;
    password:String;
    email:String;
    adress:String;
    phone:String;
    country:String;
    type:String;
    authorizationNumber:String;
    status:string;
    
    constructor(firstName:String, lastName:String, username:String,password:String, email:String,adress:String, phone:String, 
        country:String,status:string){
        this.firstName=firstName;
        this.lastName=lastName;
        this.username=username;
        this.password=password;
        this.country=country;
        this.email=email;
        this.adress=adress;
        this.phone=phone;
        this.status=status;
    }

    setId(id:number){
        this.id=id;
    }
    setType(type:String){
        this.type=type;
    }
    setAuthorisationNumber(authorizationNumber:String){
        this.authorizationNumber=authorizationNumber;
    }

}