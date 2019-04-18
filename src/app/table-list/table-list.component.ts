import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user/user-service.service';
import { User } from '../user/User';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  user1:any;
  user2:any;
  checked = false;
  user:any;
  

  constructor(private userService: UserServiceService, private router: Router,private route:ActivatedRoute) { }
  
  ngOnInit() {
  


    this.userService.getVisitor().subscribe(data => {
      this.user1 = data;
});

this.userService.getAdmin().subscribe(data => {
  this.user2 = data;
});


}


public toggle(event: MatSlideToggleChange,u:User) {
  console.log('toggle', event.checked);
  if(!event.checked){
    
    this.userService.DesactivateUser(u).subscribe(data => {
      this.user = data;
     
  });
}

  else{

    this.userService.ActivateUser(u).subscribe(data => {
      this.user = data;
     
  });
  }
    
  }
 
 
  


  }

