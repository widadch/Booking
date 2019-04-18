import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { User } from '../user/User';
import { trip } from '../trip/model/trip';
import { booking } from '../booking-list/booking'
import { Router, ActivatedRoute } from '@angular/router';
import { TripService } from 'app/trip/trip.service';
import { ArrayType } from '@angular/compiler';
import { UserServiceService } from 'app/user/user-service.service';
import { MatSlideToggleChange } from '@angular/material';
import {HostListener, ViewChild} from '@angular/core';
import { MdbTableDirective } from 'angular-bootstrap-md';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {


 userForm: FormGroup;
 selectedT: string;

  
statusBooking:string;
username:string;
dateBooking:Date;
dateTravel:string;
price:number;



 


  booking: Array<any>;
  trips: any;
  b: booking;
  user: any;
  booking1: any;
  useDefault: any;
  p: number = 1;



  constructor(private bookingService: BookingService, private tripService: TripService, private userService: UserServiceService, private router: Router, private route: ActivatedRoute,private formBuilder: FormBuilder) { 

    this.userForm=this.formBuilder.group({
     
      'statusBooking' :  ['', [Validators.required]],

    });


  }

  


  ngOnInit() {
    this.loadallbooking()

    


  }

  loadallbooking() {
    const id = this.route.snapshot.params['id'];
    this.bookingService.getBooking(id).subscribe(
      data => {
        this.booking = data;
        console.log(data)

      });
  }

  public toggle(b: booking) {

    if (b.statusBooking == 'Annuler') {
      this.bookingService.ActivateBooking(b).subscribe(data => {
        this.loadallbooking()
      });

    }
    else if(b.statusBooking == 'Valider') {

      this.bookingService.DesactivateBooking(b).subscribe(data => {
        this.loadallbooking()

      });
    }
    else  {

      this.bookingService.DesactivateBooking(b).subscribe(data => {
        this.loadallbooking()

      });
    }

  }
  
 
Search2(){
    this.selectedT = this.userForm.get("statusBooking").value
    console.log(this.userForm);
    


    if(this.selectedT=="All status"){
      this.ngOnInit();
    }
    else if(this.selectedT) {
    this.booking=this.booking.filter(res =>{
      return res.statusBooking.toLocaleLowerCase().match(this.selectedT.toLocaleLowerCase());
    });}

    
  }

  
  

  
  }







