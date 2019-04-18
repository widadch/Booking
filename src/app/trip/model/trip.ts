import { price } from './price';
import { Itinerary } from './Itinerary';
import { Includes } from './Includes';
import { Excludes } from './Excludes';
import { TripExtras } from './TripExtras';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { User } from 'app/user/User';


export class trip {
     id:number; 
     title:String;
	 description:String;
     dateValidateStart:String;
     dateValidateEnd:String;
     duration:String;
     tripPricesList:price[];
     ItineraryList:Itinerary[];
     IncludeList:Includes[]; 
     ExcludeList:Excludes[];  
     tripesExtras:TripExtras[];
      admin:User;
     constructor(title:String,description:String,dateValidateStart:String,dateValidateEnd:String,duration:String){
        this.title=title;
        this.description=description;
        this.dateValidateStart=dateValidateStart;
        this.dateValidateEnd=dateValidateEnd;
        this.duration=duration;
  
     }

    public setUser(u:User){
      this.admin=u;
  }



}