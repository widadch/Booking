import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { trip } from './model/trip';
import { price } from './model/price';
import { Itinerary } from './model/Itinerary';
import { Includes } from './model/Includes';
import { Excludes } from './model/Excludes';
import { TripExtras } from './model/TripExtras';

@Injectable()
export class TripService {
  trips :any;
  constructor(private http:HttpClient) { }

getAll():Observable<any>{
  return this.http.get("http://localhost:8080/trips");
}

getAll1(id:number):Observable<any>{
  return this.http.get("http://localhost:8080/tripsAdmin/"+id);
}

findById(id:number):Observable<any>{
  return this.http.get("http://localhost:8080/trips/"+id);
  
}

findByPrices(priceless:number,priceheight:number):Observable<any>{
  return this.http.get("http://localhost:8080/byPrices/"+priceless+"&"+priceheight);
}

MaxPrice():Observable<any>{
  return this.http.get("http://localhost:8080/maxPrice");
}

MinPrice():Observable<any>{
  return this.http.get("http://localhost:8080/minPrice");
}

RangePrice():Observable<any>{
  return this.http.get("http://localhost:8080/rangePrice");
}
LowToHeigh():Observable<any>{
  return this.http.get("http://localhost:8080/LowHeight");
}
HeighToLow():Observable<any>{
  return this.http.get("http://localhost:8080/HeightLow");
}
getLocations():Observable<any>{
  return this.http.get("http://localhost:8080/locations");
}
Filter(lowPrices:number,highPrices:number,location:String,mode:String):Observable<any>{
  return this.http.get("http://localhost:8080/Filter/"+lowPrices+"&"+highPrices+"&"+location+"&"+mode)
}

addTrip(t:trip){
  return this.http.post<trip>("http://localhost:8080/addTrip/",t);
}


addPrice(p:price,id:number){
  return this.http.post<price>("http://localhost:8080/addTripPrices/"+id,p);
}

addItinerary(i:Itinerary,id:number){
  return this.http.post<Itinerary>("http://localhost:8080/addItinerary/"+id,i);
}

addIncludes(includes:Includes,id:number){
  return this.http.post<Includes>("http://localhost:8080/addIncludes/"+id,includes);
}

addEcludes(excludes:Excludes,id:number){
  return this.http.post<Includes>("http://localhost:8080/addExcludes/"+id,excludes);
}
addTripExtras(tripEXtras:TripExtras,id:number){
  return this.http.post<Includes>("http://localhost:8080/addTripExtras/"+id,tripEXtras);
}
deleteTrip(id:number):Observable<any>{
  return  this.http.delete("http://localhost:8080/deleteTrip/"+id);
}
ModifyTrip(id:number,t:trip){
  return  this.http.put("http://localhost:8080/modifyTrip/"+id,t);
}
deleteTripPrices(id:number):Observable<any>{
  return  this.http.delete("http://localhost:8080/deleteTripPrices/"+id);
}
deleteIncludes(id:number):Observable<any>{
  return  this.http.delete("http://localhost:8080/deleteIncludes/"+id);
}
deleteExcludes(id:number):Observable<any>{
  return  this.http.delete("http://localhost:8080/deleteExcludes/"+id);
}
deleteItinerary(id:number):Observable<any>{
  return  this.http.delete("http://localhost:8080/deleteItinerary/"+id);
}
deleteTripExtras(id:number):Observable<any>{
  return  this.http.delete("http://localhost:8080/deleteTripExtras/"+id);
}

}
