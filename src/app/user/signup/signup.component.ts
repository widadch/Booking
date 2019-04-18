import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Options } from 'ng5-slider';
import { Form, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../User';
import { adminAgency } from '../adminAgency';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm: FormGroup;
  

  
  user:any;
  firstName:string;
  lastName:string;
  username:string;
  password:string;
  email:string;
  phone:string;
  address:string;
  country:string;
  type:string;
  authorization:string;
  status:string;
  u:User;
  u1:User;

  typetab: string[];
  selectedT: string;

  constructor(private userService : UserServiceService ,private router:Router,private formBuilder: FormBuilder) { 

    this.userForm=this.formBuilder.group({
      // 'firstName': ['', Validators.required],
      // 'lastName' :  ['', [Validators.required]],
      'username' : ['',[Validators.required]],
      'password' :  ['', [Validators.required]],
      'email' :    ['', [Validators.email]],
      // 'phone' :     ['',[Validators.required]],
      // 'address' :  ['',[Validators.required]],
      // 'country' :  ['', [Validators.required]],
      'type' :  ['', [Validators.required]],
      'authorization' :  ['', [Validators.required]],
      'status' :  ['', [Validators.required]],

    });

  }

  ngOnInit() {

    
  }

  onSubmit(){

  if(this.userForm.invalid)console.log("erreur");
  this.selectedT = this.userForm.get("status").value
    if (this.selectedT == "Visitor")
            { this.AddUser();}
    else {
             this.AddAdmin();
    }
}

selectedType(status) {
  this.selectedT = this.userForm.get("status").value
  console.log('selectedT', this.selectedT);    
  if (this.selectedT == "Visitor") {
    console.log('ok');
    
    this.userForm.get('authorization').disable()
    this.userForm.get('type').disable()
  }else{
    this.userForm.get('authorization').enable()
    this.userForm.get('type').enable()

  }
}

AddUser(){
  const formValue=this.userForm.value;
  console.log(this.userForm);
  
  this.u1 = new User(formValue['firstName'],formValue['lastName'],formValue['username'],formValue['password'],formValue['email'],formValue['phone'],formValue['address'],formValue['country'],formValue['status'])
  console.log(this.u);
  
  this.userService.AddUser(this.u1).subscribe(
    data=>{
      if(data==null)
      console.log("erreur");
      else
      console.log("ok");
      
      
      
      });}

 AddAdmin(){
        const formValue=this.userForm.value;
        console.log(this.userForm);
        
        this.u = new User(formValue['firstName'],formValue['lastName'],formValue['username'],formValue['password'],formValue['email'],formValue['phone'],formValue['address'],formValue['country'],formValue['status'])
        this.u.setAuthorisationNumber(formValue['authorization']);
        this.u.setType(formValue['type']);
        
        this.userService.AddAdmin(this.u).subscribe(
          data=>{
            console.log(data);
            
            });}
      


initForm(){

  
}

}







