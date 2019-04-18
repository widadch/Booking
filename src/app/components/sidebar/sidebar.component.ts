import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'app/user/user-service.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
   // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    //{ path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
   // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    //{ path: '/test', title: 'Test',  icon: 'dashboard', class: '' },
    //{ path: '/newTrip', title: 'AddTrip',  icon: 'dashboard', class: '' },
    //{ path: '/listTrip', title: 'ListTrip',  icon: 'dashboard', class: '' },
    { path: '/Trips', title: 'Trips',  icon: 'airplanemode_active ', class: '' },

];

export const ROUTES1: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
  //{ path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
 // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
  //{ path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
  //{ path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
  //{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
  //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
  //{ path: '/test', title: 'Test',  icon: 'dashboard', class: '' },
  //{ path: '/newTrip', title: 'AddTrip',  icon: 'dashboard', class: '' },
  { path: '/listTrip', title: 'ListTrip',  icon: 'flight_takeoff', class: '' },
  //{ path: '/Trips', title: 'Trips',  icon: 'dashboard', class: '' },


];

@Component({
  selector: 'app-sidebar', 
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private userService:UserServiceService) { }

  ngOnInit() {
   
      const admin=JSON.parse(localStorage.getItem('tt'));
      console.log(admin.username);
      this.userService.getStatus(admin.id).subscribe(
        data=>{
          localStorage.setItem("Status",data[0]);
   
      const Status=localStorage.getItem("Status");
      console.log(Status);
      if(Status==='adminAgency'){
        console.log('admin');
        this.menuItems = ROUTES.filter(menuItem => menuItem);
      }
    if(Status==='Visitor'){
      console.log('visitor');
    this.menuItems = ROUTES1.filter(menuItem => menuItem);
    }
  });
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
