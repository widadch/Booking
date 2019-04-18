import { Injectable } from '@angular/core';
import { trip } from '../trip/model/trip';
import { User } from '../user/User';
import { HttpClient } from '@angular/common/http';
import { booking } from '../booking-list/booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  trips:any;
  User:any;
  booking:any;
  

  constructor(private http:HttpClient) { }


  AddBooking(b:booking,idTrip:number,idVisitor:number):Observable<any>{
    return this.http.post<booking>("http://localhost:8080/newBooking/"+idTrip+"&"+idVisitor,b);
  }


  AddBookingExtras(idBooking:number,idExtras:number){
    return this.http.post<booking>("http://localhost:8080/newBookingExtras/"+idBooking+"&"+idExtras,null);
  }


  getBooking(id:number):Observable<any>{
    return this.http.get("http://localhost:8080/Booktrip/"+id);
  }

  
  ActivateBooking(b:booking){
      return this.http.put("http://localhost:8080/activateB/",b);
       
    }
    
    
   DesactivateBooking(b:booking){
      return this.http.put("http://localhost:8080/desactivateB/",b);
       
    }

  }













