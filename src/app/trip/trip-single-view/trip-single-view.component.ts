import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-trip-single-view',
  templateUrl: './trip-single-view.component.html',
  styleUrls: ['./trip-single-view.component.css']
})
export class TripSingleViewComponent implements OnInit {

  trip:Array<any>;
  SingleTrips:String="heloo";
  tabs:string="description";
  isDescription:boolean=true;
  isIncludes:boolean=false;
  isOutline:boolean=false;
  isExcludes:boolean=false;
  idTrip:number;
  constructor(private tripServic: TripService ,private route: ActivatedRoute,private router:Router,private modalService: NgbModal) {
     }

  ngOnInit() {

    const id=this.route.snapshot.params['id'];
    this.idTrip=id;
    this.tripServic.findById(id).subscribe(
      data=>{
        this.trip=data;
        console.log(this.trip);
      }
    );

  }
  open(content){
    this.modalService.open(content);
  }
  
}
