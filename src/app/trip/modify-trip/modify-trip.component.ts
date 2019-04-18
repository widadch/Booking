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
import { NgbModalConfig, NgbModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';
import { WizardComponent } from 'angular-wizard-form';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/user/User';


@Component({
  selector: 'app-modify-trip',
  templateUrl: './modify-trip.component.html',
  styleUrls: ['./modify-trip.component.scss']
})
export class ModifyTripComponent implements OnInit {
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

  listPriceTemp: price[]=[];
  listItineraryTemp: Itinerary[]=[];
  listTripExtrasTemp: TripExtras[]=[];
  listIncludesTemp: Includes[]=[];
  listExcludesTemp: Excludes[]=[];

  p: price;
  it: Itinerary;
  te: TripExtras;
  in: Includes;
  ex: Excludes;
  t: trip;
  next: number = 0;
  tripselected: Array<any> = [];

  buttonNext: HTMLElement = document.getElementById('btnNext') as HTMLElement;
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

  //String
  dateStart: String;
  dateEnd: String;


  //Date
  date: Date;
  date1: Date;
  step1: boolean = false;
  admin:User;
  model: NgbDateStruct;
  dateTEST: {year: number, month: number};

  constructor(private formBuilder: FormBuilder, private formBuilder1: FormBuilder, private formBuilder2: FormBuilder,
    private tripService: TripService, private datePipe: DatePipe, private config: NgbModalConfig, private modalService: NgbModal
    , private route: ActivatedRoute, private router: Router) {
    // config.backdrop = 'static';
    // config.keyboard = false;

    this.tripForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dateStartValidate: ['',Validators.required],
      dateEndValidate: ['',Validators.required],
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
    console.log("Start");
    this.loadTrips();

    this.date = new Date(2019, 3, 30);
    this.date1 = new Date(2020, 3, 20);
    console.log("Start");
    console.log(this.tripselected);
    console.log(this.formBuilder);
    this.initForm();
    console.log("End");
  }
  loadTrips() {
    let temp;
    const id = this.route.snapshot.params['id'];
    this.tripService.findById(id).subscribe(
      data => {
        this.tripselected=data;
        console.log(data.dateValidateStart);
        const d=this.parse(data.dateValidateStart);
        const d1=this.parse(data.dateValidateEnd);
        console.log(d);
       // this.model.year=2019;
        /*this.model.day=1;
        this.model.month=2;
        this.model.year=2019;*/
        this.listPrice = data.tripPricesList;
        this.listItinerary = data.itineraryList;
        this.listTripExtras = data.tripesExtras;
        this.listIncludes = data.includeList;
        this.listExcludes = data.excludeList;
        console.log("date :"+data.dateValidateStar);
        this.tripForm.patchValue({
          title:data.title,
          description:data.description,
          dateValidateStart:d,
          duration: data.duration
        });
      }

    );
    console.log(this.tripForm);

  }

  initForm() {
    /* this.tripForm = this.formBuilder.group({
       title: [this.tripselected.title, Validators.required],
       description: [this.tripselected.description, Validators.required],
       dateStartValidate: [this.tripselected.dateValidateStart, Validators.required],
       dateEndValidate: [this.tripselected.dateValidateEnd, Validators.required],
       duration: [this.tripselected.duration, Validators.required]
     });*/
    console.log("initForm");


    // this.tripForm.setValue({
    //   title: null,

    // })
    

  }

  //Form
  onSubmit() {

    const formValue = this.tripForm.value;
    console.log(this.tripForm);
    if (this.date < this.date1) console.log("date Fin Grand");
    else console.log("date start Grand");

    if (this.tripForm.valid) {
      this.date = new Date(formValue['dateStartValidate'].year, (formValue['dateStartValidate'].month) - 1, formValue['dateStartValidate'].day);
      this.date1 = new Date(formValue['dateEndValidate'].year, (formValue['dateEndValidate'].month) - 1, formValue['dateEndValidate'].day);
      this.dateStart = this.datePipe.transform(this.date, 'yyyy-MM-dd');
      this.dateEnd = this.datePipe.transform(this.date1, 'yyyy-MM-dd');
      console.log("date Start :" + this.dateStart);
      console.log("date End :" + this.dateEnd);
      if(this.date<this.date1)this.step1=true;
      else this.step1=false;
      console.log(this.step1);

    }
    else {
      if (formValue['title'] === "") this.titleErrors = "Title is required";
      if (formValue['description'] === "") this.descriptionErrors = "Description is required";
      if (formValue['dateStartValidate'] === "") this.dateStartErrors = "Date Start Validate is required";
      if (formValue['dateEndValidate'] === "") this.dateEndErrors = "Date End Validate is required";
      if (formValue['duration'] === "") this.durationErrors = "Duration is required";
      this.next = 0;
      this.step1=false;
    }


  }

  onSubmit1() {

    const formValue = this.priceForm.value;
    if (this.priceForm.valid) {
      console.log(formValue['price']);
      console.log(formValue['PriceTitle']);
      console.log(formValue['category']);
      console.log(formValue['sizeMin']);
      console.log(formValue['sizeMax']);
      this.p = new price(formValue['PriceTitle'], formValue['category'], formValue['sizeMin'], formValue['sizeMax'], formValue['price']);
      this.listPrice.push(this.p);
      this.listPriceTemp.push(this.p);
      for (let i = 0; i < this.listPrice.length; i++) {
        console.log(this.listPrice[i]);
      }
      console.log(this.listPrice);
    }
    else {
      if (this.priceForm.get('PriceTitle').invalid) this.priceTitleErrors = "Title Price is required";
      if (this.priceForm.get('price').invalid) this.priceErrors = "Price is required,price is number";
      if (this.priceForm.get('category').invalid) this.categoryErrors = "category is required";
      if (this.priceForm.get('sizeMin').invalid) this.minSizeErrors = "Min Size is required,Min Size is number";
      if (this.priceForm.get('sizeMax').invalid) this.maxSizeErrors = "Max Size is required,Max Size is number";

    }


  }

  onSubmit2() {

    const formValue = this.outlineForm.value;

    if (this.outlineForm.valid) {
      console.log(formValue);
      this.it = new Itinerary(formValue['ItineraryTitle'], formValue['ItineraryDescription'], formValue['ItineraryDuration']);
      this.listItinerary.push(this.it);
      this.listItineraryTemp.push(this.it);
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
      this.listTripExtrasTemp.push(this.te);
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
      this.listIncludesTemp.push(this.in);
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
      this.listExcludesTemp.push(this.ex);

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
    const p1:price=p;
    for (let i = 0; i < this.listPrice.length; i++) {
      if (p === this.listPrice[i]) {
        console.log("test!!");
        this.listPrice = this.listPrice.filter(obj => obj !== this.listPrice[i]);

      }

    }

    for (let i = 0; i < this.listPriceTemp.length; i++) {
      if (p1 === this.listPriceTemp[i]) {
        console.log("test!!");
        this.listPriceTemp = this.listPriceTemp.filter(obj => obj !== this.listPriceTemp[i]);

      }

    }
  }

  deleteItinerary(itinerary: Itinerary) {
    const i1:Itinerary=itinerary;
    for (let i = 0; i < this.listItinerary.length; i++) {
      if (itinerary === this.listItinerary[i]) {
        this.listItinerary = this.listItinerary.filter(obj => obj !== this.listItinerary[i]);

      }

    }
    for (let i = 0; i < this.listItineraryTemp.length; i++) {
      if (i1 === this.listItineraryTemp[i]) {
        this.listItineraryTemp = this.listItineraryTemp.filter(obj => obj !== this.listItineraryTemp[i]);

      }

    }


  }

  deleteTripExtras(tripExtras: TripExtras) {
    const ip1:TripExtras=tripExtras;
    for (let i = 0; i < this.listTripExtras.length; i++) {
      if (tripExtras === this.listTripExtras[i]) {
        this.listTripExtras = this.listTripExtras.filter(obj => obj !== this.listTripExtras[i]);

      }

    }

    for (let i = 0; i < this.listTripExtrasTemp.length; i++) {
      if (ip1 === this.listTripExtrasTemp[i]) {
        this.listTripExtrasTemp = this.listTripExtrasTemp.filter(obj => obj !== this.listTripExtrasTemp[i]);

      }

    }
  }

  deleteIncludes(include: Includes) {
    
    const inc:Includes=include;
    for (let i = 0; i < this.listIncludes.length; i++) {
      if (include === this.listIncludes[i]) {
        this.listIncludes = this.listIncludes.filter(obj => obj !== this.listIncludes[i]);

      }

    }
    for (let i = 0; i < this.listIncludesTemp.length; i++) {
      if (inc === this.listIncludesTemp[i]) {
        this.listIncludesTemp = this.listIncludesTemp.filter(obj => obj !== this.listIncludesTemp[i]);

      }

    }
  }

  deleteExcludes(excludes: Excludes) {

    const exc:Excludes=excludes;

    for (let i = 0; i < this.listExcludes.length; i++) {
      if (excludes === this.listExcludes[i]) {
        this.listExcludes = this.listExcludes.filter(obj => obj !== this.listExcludes[i]);
        console.log(this.listExcludes);
      }

    }


    for (let i = 0; i < this.listExcludesTemp.length; i++) {
      if (exc === this.listExcludesTemp[i]) {
        this.listExcludesTemp = this.listExcludesTemp.filter(obj => obj !== this.listExcludesTemp[i]);
        console.log(this.listExcludes);
      }

    }
  }

  open(content) {
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
    const id = this.route.snapshot.params['id'];
    this.tripService.ModifyTrip(id,this.t).subscribe(
      data => {
        console.log(data);
        console.log(this.listPrice);

        this.tripService.deleteTripPrices(id).subscribe(
          p=>{ 
        for (let i = 0; i < this.listPrice.length; i++) {
          this.tripService.addPrice(this.listPrice[i], id).subscribe(
            price => {
            }
          );
        }
      });
        //Add List Itinerary
        this.tripService.deleteItinerary(id).subscribe(
          it=>{
        for (let i =0 ; i <this.listItinerary.length; i++) {
          this.tripService.addItinerary(this.listItinerary[i], id).subscribe(
            itinerary => {
            }
          );
        }
      });

        //Add List includes 
        this.tripService.deleteIncludes(id).subscribe(
          i=>{
        for (let i =0; i <this.listIncludes.length; i++) {
          this.tripService.addIncludes(this.listIncludes[i], id).subscribe(
            includes => {
            }
          );
        }
      }
        ); 

        //Add List excludes 
        this.tripService.deleteExcludes(id).subscribe(
          ex=>{

        for (let i = 0; i <this.listExcludes.length ; i++) {
          this.tripService.addEcludes(this.listExcludes[i], id).subscribe(
            excludes => {
            }
          );
        }
      });

          //Add List TripExtras
          this.tripService.deleteTripExtras(id).subscribe(
            te=>{
          for (let i =0 ; i <this.listTripExtras.length; i++) {
            this.tripService.addTripExtras(this.listTripExtras[i], id).subscribe(
              tripExtras => {
              }
            );
          }
        });

        //Add List Prices
       // this.tripService.deleteTripPrices(id).subscribe();
      /*  for (let i = 0; i < this.listPriceTemp.length; i++) {
          this.tripService.addPrice(this.listPriceTemp[i], id).subscribe(
            price => {
              console.log(this.listPriceTemp[i]);
            }
          );
        }

        //Add List Itinerary
        //this.tripService.deleteItinerary(id).subscribe(); 
        for (let i = 0; i < this.listItineraryTemp.length; i++) {
          this.tripService.addItinerary(this.listItineraryTemp[i], id).subscribe(
            itinerary => {
              console.log(this.listItineraryTemp[i]);
            }
          );
        }

        //Add List includes 
        //this.tripService.deleteIncludes(id).subscribe(); 
        for (let i = 0; i < this.listIncludesTemp.length; i++) {
          this.tripService.addIncludes(this.listIncludesTemp[i], id).subscribe(
            includes => {
              console.log(this.listIncludesTemp[i]);
            }
          );
        }

        //Add List excludes 
      //  this.tripService.deleteExcludes(id).subscribe(); 

        for (let i = 0; i < this.listExcludesTemp.length; i++) {
          this.tripService.addEcludes(this.listExcludesTemp[i], id).subscribe(
            excludes => {
              console.log(this.listExcludesTemp[i]);
            }
          );
        }*/
        this.router.navigate(['/Trips']);

      },
      errors => {
        console.log(errors)
      }
    );
  }

  parse(value: any) {
  
      const str = value.split('-');
        console.log("dhgfhdfdhgf");
      const y = Number(str[2]);
      const m = Number(str[1]) - 1;
      const d = Number(str[0]);
      const date: NgbDateStruct={
        day:d,
        month:m,
       year:y
     
      
     };
 
      return date;
    

}

}