import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user/user-service.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgControl } from '@angular/forms';
import { fn } from '@angular/compiler/src/output/output_ast';
import { adminAgency } from 'app/user/adminAgency';
import { User } from 'app/user/User';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userForm: FormGroup;
  user: User;
  userJson = JSON.parse(localStorage.getItem("tt"));

  constructor(private userService: UserServiceService, private router: Router, private formBuilder: FormBuilder) {

    this.userForm=this.formBuilder.group({
      
      firstName: ['', Validators.required],
      lastName :  ['', [Validators.required]],
      username : ['',[Validators.required]],
      password :  ['', [Validators.required]],
      Email :    ['', [Validators.email]],
      phone :     ['',[Validators.required]],
      address :  ['',[Validators.required]],
      country :  ['', [Validators.required]],
    });


  this.userForm.setValue(
    {
      
      firstName: this.userJson.firstName,
      lastName: this.userJson.lastName,
      username: this.userJson.username,
      password: this.userJson.password,
      Email: this.userJson.email,
      phone: this.userJson.phone,
      address: this.userJson.adress,
      country: this.userJson.country,
      
      

    }
  )

  }

  fname = this.userJson.firstName;
  lname=  this.userJson.lastName;
  lcountry= this.userJson.country;

  ngOnInit() {
  }

  onSubmit(){
    const formValue=this.userForm.value;
    console.log(this.userForm);
    this.user = new User(formValue['firstName'],formValue['lastName'],formValue['username'],formValue['password'],formValue['Email'],formValue['phone'],formValue['address'],formValue['country'],formValue['status']);
   this.user.setId(this.userJson.id);
    this.update();
  }


  update() {
    
    console.log();
    this.userService.UpdateUser(this.user).subscribe(
      data => {
        console.log(data);
      }
    );

  }
}