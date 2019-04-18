import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Options } from 'ng5-slider';
import { Form, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userForm: FormGroup;
  user:any;
  email:string;
  password:string;
  token = "mysweettoken";
  u:object;
  error:boolean=false;
  auth:boolean=false;

  constructor(private userService : UserServiceService ,private router:Router,private formBuilder: FormBuilder) {
  }


  ngOnInit() {

    this.initForm();

  }

  onSubmit(){
    if(this.userForm.invalid)
    {
      this.auth=false;
    }
    else{
    this.Authenti();
    }
  }
  Authenti(){
    const formValue=this.userForm.value;
    console.log(formValue['username']+formValue['password']);
    this.userService.FindByUsername(formValue['username'],formValue['password']).subscribe(
      data=>{
        console.log(data);
        this.user=data;
        if(Object.is(this.user,null)) {
          this.error=true;
          this.auth=false;
        }
        else {
          
          console.log("username"+this.user.username); 
          console.log("address"+this.user.address); 
          localStorage.setItem("tt", JSON.stringify(this.user)); 
          this.router.navigate(['/dashboard']);  
        
        }
     
      }
    );

  }

  
  initForm(){

    this.userForm=this.formBuilder.group({
      'username' : ['',[Validators.required]],
      'password' :  ['', [Validators.required]],
    });
  }


}





