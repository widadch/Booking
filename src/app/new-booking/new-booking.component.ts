import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from 'app/trip/trip.service';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss']
})
export class NewBookingComponent implements OnInit {

    trip:Array<any>=[];
    idPrice:number;
    Totalprice:number=0;
    pax:number=0;
    priceU:number=0;
  constructor( private route: ActivatedRoute,private tripService:TripService) { }

  ngOnInit() {
    this.Totalprice=0;
    const id=this.route.snapshot.params['id'];
    const id1=this.route.snapshot.params['id1'];
    this.idPrice=id1;
    this.tripService.findById(id).subscribe(
      data=>{
        this.trip=data;
      }
    );

    console.log(id," ",id1);
  }
  setTotalPrice():number{
  
    console.log(this.pax,this.priceU);
    return this.pax*this.priceU+this.Totalprice;
    
  }
  setPriceU(pr:number){
    this.priceU=pr;

  }

  showOptions(event,price:number){
    console.log(event.checked,price);
    
    if(event.checked==true){
      console.log("price : ",this.Totalprice);
      this.Totalprice +=price;
      console.log("price1 : ",this.Totalprice);
    }
    
    else {
      this.Totalprice -=price;
    }
    
    
  }

}