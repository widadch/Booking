import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { adminAgency } from './adminAgency';
import { User } from './User';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users :any;

  constructor(private http:HttpClient) { }

  FindByUsername(username:string,password:string):Observable<any>{
    return this.http.get("http://localhost:8080/auth/"+username+"&"+password);
  }

  AddUser(u:User){
     return this.http.post<User>("http://localhost:8080/addUser",u);}

  AddAdmin(u:User){
    return this.http.post<User>("http://localhost:8080/addAdmin",u);
  }
  

  UpdateUser(u:User){
    return this.http.put<User>("http://localhost:8080/update/",u);
 }

 GetUsers(){
  return this.http.get<User>("http://localhost:8080/users/")
}

FindByID(id : string){
  return this.http.get("http://localhost:8080/users/"+id);
}

getUser1(id:string){
  return this.http.get("http://localhost:8080/user/"+id);

}

getStatus(id :string){
  return this.http.get("http://localhost:8080/getStatus/"+id)
}

getVisitor(){
  return this.http.get("http://localhost:8080/getVisitor/")
}

getAdmin(){
  return this.http.get("http://localhost:8080/getAdmin/")
}

ActivateUser(u:User){
  return this.http.put("http://localhost:8080/activate/",u);
}

DesactivateUser(u:User ){
  return this.http.put("http://localhost:8080/desactivate/",u)
}
}
