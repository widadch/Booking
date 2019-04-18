export class adminAgency{
    id :number;
    firstName:string;
    lastName:string;
    username:string;
    password:string;
    email:string;
    phone:string;
    adress:string;
    country:string;
    type:string;
    authorizationNumber:string;
    status:string;
  
    constructor(firstName,lastName,username,password,email,phone,adress,country,type,authorizationNumber,status){
        
        this.firstName=firstName;
        this.lastName=lastName;
        this.username=username;
        this.password=password;
        this.email=email;
        this.phone=phone;
        this.adress=adress;
        this.country=country;
        this.type=type;
        this.authorizationNumber=this.authorizationNumber;
        this.status=this.status;
    }
      
  }
  
  