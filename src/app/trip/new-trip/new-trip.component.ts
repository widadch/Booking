import { Component, OnInit, ViewChild, QueryList } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { price } from '../model/price';
import { Itinerary } from '../model/Itinerary';
import { TripExtras } from '../model/TripExtras';
import { Includes } from '../model/Includes';
import { Excludes } from '../model/Excludes';
import { trip } from '../model/trip';
import { TripService } from '../trip.service';
import { DatePipe } from '@angular/common';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {formatDate} from '@angular/common';
import { WizardComponent, WizardStepComponent } from 'angular-wizard-form';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { User } from 'app/user/User';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})


export class NewTripComponent implements OnInit {
 

  tripForm: FormGroup;
  priceForm: FormGroup;
  outlineForm: FormGroup;
  tripExtrasForm: FormGroup;
  tripFormIncludes: FormGroup;
  tripFormExcludes: FormGroup;
  listPrice: price[];
  listItinerary: Itinerary[];
  listTripExtras: TripExtras[];
  listIncludes: Includes[];
  listExcludes: Excludes[];
  p: price;
  it: Itinerary;
  te: TripExtras;
  in: Includes;
  ex: Excludes;
  t: trip;
  next:number=0;
   buttonNext:HTMLElement=document.getElementById('btnNext') as HTMLElement;
  // errors
  titleErrors: String;
  descriptionErrors: String;
  dateStartErrors: String;
  dateEndErrors: String;
  durationErrors: String;
  priceTitleErrors: String;
  priceErrors: String;
  maxSizeErrors: String;
  minSizeErrors: String;
  categoryErrors: String;
  ItineraryTitleErors: String;
  ItineraryDescriptionErrors: String;
  ItineraryDurationErrors: String;
  TripExtrasTitleErrors: String;
  TripExtrasDescriptionErrors: String;
  TripExtrasPriceErrors: String;
  TripExtrasUnitErrors: string;
  IncludeTitleErrors: String;
  IncludeDescriptionErrors: String;
  ExludesTitleErrors: String;
  ExcludeDescriptionErrors: String;
  MaxMinErrors: String;


  @ViewChild(WizardComponent)
  public wizard: WizardComponent;
  //String
  dateStart:String;
  dateEnd:String;
  step:number=0;
  admin:User;

  //Date
  date:Date;
  date1:Date;
  step1: boolean = false;
  step2: boolean = false;

  constructor(private formBuilder: FormBuilder, private formBuilder1: FormBuilder, private formBuilder2: FormBuilder, 
    private tripService: TripService,private datePipe: DatePipe,private config: NgbModalConfig, private modalService: NgbModal,
    private router: Router) {
     // config.backdrop = 'static';
     // config.keyboard = false;,
  
     this.tripForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dateStartValidate: ['', Validators.required],
      dateEndValidate: ['', Validators.required],
      duration: ['', Validators.required]
    });

    this.priceForm = this.formBuilder1.group({
      price: ['', Validators.required],
      PriceTitle: ['', Validators.required],
      category: ['', Validators.required],
      sizeMin: ['', Validators.required],
      sizeMax: ['', Validators.required]

    });

    this.outlineForm = this.formBuilder2.group({
      ItineraryTitle: ['', Validators.required],
      ItineraryDescription: ['', Validators.required],
      ItineraryDuration: ['', Validators.required]

    });

    this.tripFormIncludes = this.formBuilder.group({
      IncludeTitle: ['', Validators.required],
      IncludeDescription: ['', Validators.required]
    });
    this.tripFormExcludes = this.formBuilder.group({
      ExludesTitle: ['', Validators.required],
      ExcludeDescription: ['', Validators.required]
    });

    this.tripExtrasForm = this.formBuilder.group({
      TripExtrasTitle: ['', Validators.required],
      TripExtrasDescription: ['', Validators.required],
      TripExtrasPrice: ['', Validators.required],
      TripExtrasUnit: ['', Validators.required]
    });
  }

  ngOnInit() {

    this.listPrice = [];
    this.listItinerary = [];
    this.listTripExtras = [];
    this.listIncludes = [];
    this.listExcludes = [];
    this.date=new Date(2019,3,20);
    this.date1=new Date(2020,3,20);



    console.log(this.date+" "+ this.date1);
    this.initForm();
  }

  initForm() {
  
  
  }
  //Form
  onSubmit() {
    console.log("on submit");
    console.log(this.tripForm);
    const formValue = this.tripForm.value;
    if(this.date<this.date1)console.log("date Fin Grand");
    else console.log("date start Grand");
    if (this.tripForm.valid ) {
      this.date=new Date(formValue['dateStartValidate'].year,(formValue['dateStartValidate'].month)-1,formValue['dateStartValidate'].day);
      this.date1=new Date(formValue['dateEndValidate'].year,(formValue['dateEndValidate'].month)-1,formValue['dateEndValidate'].day);
      this.dateStart=this.datePipe.transform(this.date,'yyyy-MM-dd');
      this.dateEnd=this.datePipe.transform(this.date1,'yyyy-MM-dd');
      console.log("date Start :"+this.dateStart);
      console.log("date End :"+this.dateEnd);
      if(this.date<this.date1)this.step1=true;
      else this.step1=false;
      console.log(this.step1);

    }
    else {
      if (formValue['title'] === "") this.titleErrors = "Title is required";
      if (formValue['description'] === "") this.descriptionErrors = "Description is required";
      if (formValue['dateStartValidate'] === "") this.dateStartErrors = "Date Start Validate is required";
      if (formValue['dateEndValidate'] === "") this.dateEndErrors = "Date End Validate is required";
      if (formValue['duration']==="") this.durationErrors = "Duration is required";
      this.step1=false;
      console.log(this.step1);

    }
  

  }

  onClick(){
    console.log("oncLICK");
   if(this.step1==true)this.step2=true;
   if(this.step1==false)this.step2=false; 
  }

  onSubmit1() {

    const formValue = this.priceForm.value;
    if (this.priceForm.valid && formValue['sizeMax']>=formValue['sizeMin']) {
      console.log(formValue['price']);
      console.log(formValue['PriceTitle']);
      console.log(formValue['category']);
      console.log(formValue['sizeMin']);
      console.log(formValue['sizeMax']);
      this.p = new price(formValue['PriceTitle'], formValue['category'], formValue['sizeMin'], formValue['sizeMax'], formValue['price']);
      this.listPrice.push(this.p);
      for (let i = 0; i < this.listPrice.length; i++) {
        console.log(this.listPrice[i]);
      }
      this.MaxMinErrors="";
    }
    else {
      if (this.priceForm.get('PriceTitle').invalid) this.priceTitleErrors = "Title Price is required";
      if (this.priceForm.get('price').invalid) this.priceErrors = "Price is required,price is number";
      if (this.priceForm.get('category').invalid) this.categoryErrors = "category is required";
      if (this.priceForm.get('sizeMin').invalid) this.minSizeErrors = "Min Size is required,Min Size is number";
      if (this.priceForm.get('sizeMax').invalid) this.maxSizeErrors = "Max Size is required,Max Size is number";
      if(formValue['sizeMax']< formValue['sizeMin']){
        console.log('sjhdjshddjs');
        
      this.MaxMinErrors="Max size Should be greater than Min size ";
      }
    }


  }

  onSubmit2() {

    const formValue = this.outlineForm.value;

    if (this.outlineForm.valid) {
      console.log(formValue);
      this.it = new Itinerary(formValue['ItineraryTitle'], formValue['ItineraryDescription'], formValue['ItineraryDuration']);
      this.listItinerary.push(this.it);
    }

    else {
      if (this.outlineForm.get('ItineraryTitle').invalid) this.ItineraryTitleErors = "Itinerary Title Price is required";
      if (this.outlineForm.get('ItineraryDescription').invalid) this.ItineraryDescriptionErrors = "Itinerary Description is required";
      if (this.outlineForm.get('ItineraryDuration').invalid) this.ItineraryDurationErrors = "Itinerary Duration is required,Itinerary Duration is required";
    }
    for (let i = 0; i < this.listItinerary.length; i++) {
      console.log(this.listItinerary[i]);
    }

  }

  onSubmit3() {

    const formValue = this.tripExtrasForm.value;
    const formValue1 = this.tripForm.value;

    if (this.tripExtrasForm.valid) {
      console.log(formValue);
      this.te = new TripExtras(formValue['TripExtrasTitle'], formValue['TripExtrasDescription'], formValue['TripExtrasPrice'], formValue['TripExtrasUnit']);
      this.listTripExtras.push(this.te);
    }

    else {
      if (this.tripExtrasForm.get('TripExtrasTitle').invalid) this.TripExtrasTitleErrors = "Title is required";
      if (this.tripExtrasForm.get('TripExtrasDescription').invalid) this.TripExtrasDescriptionErrors = "Description is required";
      if (this.tripExtrasForm.get('TripExtrasPrice').invalid) this.TripExtrasPriceErrors = "Price is required,Price is number";
      if (this.tripExtrasForm.get('TripExtrasUnit').invalid) this.TripExtrasUnitErrors = "Unit is required";

    }
    for (let i = 0; i < this.listTripExtras.length; i++) {
      console.log(this.listTripExtras[i]);
    }

  }

  onSubmit4() {

    const formValue = this.tripFormIncludes.value;

    if (this.tripFormIncludes.valid) {
      console.log(formValue);
      this.in = new Includes(formValue['IncludeTitle'], formValue['IncludeDescription']);
      this.listIncludes.push(this.in);
    }

    else {
      if (this.tripFormIncludes.get('IncludeTitle').invalid) this.IncludeTitleErrors = "Title is required";
      if (this.tripFormIncludes.get('IncludeDescription').invalid) this.IncludeDescriptionErrors = "Description is required";


    }
    for (let i = 0; i < this.listIncludes.length; i++) {
      console.log(this.listIncludes[i]);
    }

  }

  onSubmit5() {

    const formValue = this.tripFormExcludes.value;

    if (this.tripFormExcludes.valid) {
      console.log(formValue);
      this.ex = new Excludes(formValue['ExludesTitle'], formValue['ExcludeDescription']);
      this.listExcludes.push(this.ex);
    }

    else {
      if (this.tripFormExcludes.get('ExludesTitle').invalid) this.ExludesTitleErrors = "Title is required";
      if (this.tripFormExcludes.get('ExcludeDescription').invalid) this.ExcludeDescriptionErrors = "Description is required";


    }
    for (let i = 0; i < this.listExcludes.length; i++) {
      console.log(this.listExcludes[i]);
    }

  }


  deletePrice(p: price) {

    for (let i = 0; i < this.listPrice.length; i++) {
      if (p === this.listPrice[i]) {
        this.listPrice = this.listPrice.filter(obj => obj !== this.listPrice[i]);

      }

    }
  }

  deleteItinerary(itinerary: Itinerary) {

    for (let i = 0; i < this.listItinerary.length; i++) {
      if (itinerary === this.listItinerary[i]) {
        this.listItinerary = this.listItinerary.filter(obj => obj !== this.listItinerary[i]);

      }

    }
  }

  deleteTripExtras(tripExtras: TripExtras) {

    for (let i = 0; i < this.listTripExtras.length; i++) {
      if (tripExtras === this.listTripExtras[i]) {
        this.listTripExtras = this.listTripExtras.filter(obj => obj !== this.listTripExtras[i]);

      }

    }
  }

  deleteIncludes(include: Includes) {

    for (let i = 0; i < this.listIncludes.length; i++) {
      if (include === this.listIncludes[i]) {
        this.listIncludes = this.listIncludes.filter(obj => obj !== this.listIncludes[i]);

      }

    }
  }

  deleteExcludes(excludes: Excludes) {

    for (let i = 0; i < this.listExcludes.length; i++) {
      if (excludes === this.listExcludes[i]) {
        this.listExcludes = this.listExcludes.filter(obj => obj !== this.listExcludes[i]);
        console.log(this.listExcludes);
      }

    }
  }

open(content){
  this.modalService.open(content);

}

  addTrip() {

    console.log("ici Trip");
    const formValue = this.tripForm.value;
    this.admin=JSON.parse(localStorage.getItem('tt')); 
    
    this.t = new trip(formValue['title'], formValue['description'],this.dateStart,this.dateEnd,
      formValue['duration']);
      this.t.setUser(this.admin);
    //Add Trip
    this.tripService.addTrip(this.t).subscribe(
      data => {
        console.log(data);
        //Add List Prices 
        for (let i = 0; i < this.listPrice.length; i++) {
          this.tripService.addPrice(this.listPrice[i], data.id).subscribe(
            price => {
              console.log(this.listPrice[i]);
            }
          );
        }
        //Add List Itinerary 
        for (let i = 0; i < this.listItinerary.length; i++) {
          this.tripService.addItinerary(this.listItinerary[i], data.id).subscribe(
            itinerary => {
              console.log(this.listItinerary[i]);
            }
          );
        }
         //Add List includes 
         for (let i = 0; i < this.listIncludes.length; i++) {
          this.tripService.addIncludes(this.listIncludes[i], data.id).subscribe(
            includes => {
              console.log(this.listIncludes[i]);
            }
          );
        }

          //Add List excludes 
          for (let i = 0; i < this.listExcludes.length; i++) {
            this.tripService.addEcludes(this.listExcludes[i], data.id).subscribe(
              includes => {
                console.log(this.listExcludes[i]);
              }
            );
          }
            //Add List TripExtras 
            for (let i = 0; i < this.listTripExtras.length; i++) {
              this.tripService.addTripExtras(this.listTripExtras[i], data.id).subscribe(
                includes => {
                  console.log(this.listExcludes[i]);
                }
              );
            }
          this.router.navigate(['/Trips']);

      },
      errors => {
        console.log(errors)
      }
    );
  }

 

}



