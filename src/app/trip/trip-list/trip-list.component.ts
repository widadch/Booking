import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';
import { Router } from '@angular/router';
import { Options,LabelType } from 'ng5-slider';
import { ConditionalExpr } from '@angular/compiler';
import { ALLOW_MULTIPLE_PLATFORMS } from '@angular/core/src/application_ref';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  public isCollapsed = true;
  trips :Array<any>;
  locations :Array<any>;
  tripSingle :Array<any>;
  rangePrice:Array<any>;;
  value: number = 40;
  highValue: number = 60;
  options: Options;
  p: number = 1;
  selectedValue=null;
  isLowToHigh:boolean=true;
  isHighToLow:boolean=false;
  mode:String="ASC";
  loc:String="Makkah";

  constructor(private tripService : TripService,private router:Router) {
   }

  ngOnInit() {

    this.tripService.getAll().subscribe(
      data=>{
        this.trips=data;
        this.tripSingle=data;
      
      }
    );

    this.tripService.RangePrice().subscribe(
      data=>{
        this.rangePrice=data;
        this.value=this.rangePrice[0][0];
        this.highValue=this.rangePrice[0][1];
        this.options = {
          floor: this.rangePrice[0][0],
          ceil: this.rangePrice[0][1],
          translate: (value: number, label: LabelType): string => {
            switch (label) {
              case LabelType.Low:
                return '<b>Min price:</b> $' + value;
              case LabelType.High:
                return '<b>Max price:</b> $' + value;
              default:
                return '$' + value;
            }
          }
        };

      }
    );

    console.log(this.selectedValue);
    this.getLocations();
  }

  findByPrice(){
    console.log(this.value);
    console.log(this.highValue);

    

    this.tripService.findByPrices(this.value,this.highValue).subscribe(
      data=>{
        this.trips=data;
      }
    );
  }

  isLowToHighFunction(){
   this.isLowToHigh=true;
  this.isHighToLow=false;
  }
  isHighToLowFunction(){
 
   this.isLowToHigh=false;
  this.isHighToLow=true;
  }
  onSubmit(form:NgForm){
    if(this.isLowToHigh)this.mode="ASC";
    else this.mode="DESC";
    console.log(form.value.location);
    this.tripService.Filter(this.value,this.highValue,form.value.location,this.mode).subscribe(
      data=>{
        this.trips=data;
      }
    );
  }
  getLocations(){
    this.tripService.getLocations().subscribe(
      data=>{
        this.locations=data;
      }
    );

}
}
