import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { trip } from '../model/trip';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-trip-list-admin',
  templateUrl: './trip-list-admin.component.html',
  styleUrls: ['./trip-list-admin.component.scss']
})
export   class TripListAdminComponent {

  trips: Array<any>;
  p: number = 1;
  currentDate:Date=new Date();
  current:String;
  constructor(private tripService: TripService, private modalService: NgbModal,private router:Router,private datePipe:DatePipe) { }

  ngOnInit() {
     this.current=this.datePipe.transform(this.currentDate,'yyyy-MM-dd');
    const admin=JSON.parse(localStorage.getItem('tt'));  
    this.tripService.getAll1(admin.id).subscribe(
      data => {
        this.trips = data;
        
        

      }
    );
  }

  open(content) {
    this.modalService.open(content);

  }

  deleteTrip(id: number) {

    const idTemp=id;
    this.tripService.deleteTrip(id).subscribe(
      data => {
        const admin=JSON.parse(localStorage.getItem('tt'));  
        this.tripService.getAll1(admin.id).subscribe(
          data => {
            this.trips = data;
            this.tripService.deleteIncludes(idTemp).subscribe();
            this.tripService.deleteExcludes(idTemp).subscribe();
            this.tripService.deleteItinerary(idTemp).subscribe();
            this.tripService.deleteTripPrices(idTemp).subscribe();
          }
        );
        console.log("Well!!");
      }
    );
 
  }

goToAddTrip(){
  this.router.navigate(['newTrip']);
}

compareToDate(date1:string,date2:string){
  let dateStart=new Date(date1);
  let dateEnd=new Date(date2);
  if(date1>=date2)return 0;
  else return 1;


}

}