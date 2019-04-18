import { Component, OnInit } from '@angular/core';
import { Route, RouterLinkActive, RouteReuseStrategy, ActivatedRoute } from '@angular/router';
import { User } from '../user/User';
import { UserServiceService } from 'app/user/user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  
  user:any;
 


  constructor(private route:ActivatedRoute,private userService: UserServiceService){

  


   }
  ngOnInit() {

    const id = this.route.snapshot.params['id'];
     
    this.userService.FindByID(id).subscribe(data => {
      this.user= data;
      console.log(data);

    
    
      
});
    
  }

}
