import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TripListAdminComponent } from './trip/trip-list-admin/trip-list-admin.component';
import { ModifyTripComponent } from './trip/modify-trip/modify-trip.component';
import { SigninComponent } from './user/signin/signin.component';
import {HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './trip/trip-list/filter/filter.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NavComponent } from './acceuil/nav/nav.component';
import { GaleryComponent } from './acceuil/galery/galery.component';
import { TripListComponent } from './trip/trip-list/trip-list.component';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxPaginationModule } from 'ngx-pagination';
import { TripService } from './trip/trip.service';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { TripsComponent } from './acceuil/trips/trips.component';
import { SignupComponent } from './user/signup/signup.component';


import { NouisliderModule } from 'ng2-nouislider';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NgbModule, 
    Ng5SliderModule,
    NgxPaginationModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),


    NouisliderModule,
   
  ],

  exports: [
    TripsComponent

  ],

  declarations: [    
    AppComponent,
    AdminLayoutComponent,
    SigninComponent,
    FilterComponent,
    AcceuilComponent,
    NavComponent,
    GaleryComponent,
    TripsComponent,
    SignupComponent,
  
  ],

  providers: [TripService],
  bootstrap: [AppComponent],
})
export class AppModule { }
