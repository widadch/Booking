import { TripExtras } from "app/trip/model/TripExtras";

export class booking{
    statusBooking:String ;
    statusPayememt:String ;
    dateBooking:String ;
    dateTravel:String;
     price:number;

constructor(statusBooking:String,statusPayememt:String,dateBooking:String,dateTravel:String,price:number) {
this.statusBooking=statusBooking;
this.statusPayememt=statusPayememt;
this.dateBooking=dateBooking;
this.dateTravel=dateTravel;
this.price=price;

}
}