import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ArchwizardModule } from 'ng2-archwizard';
import {MatDatepickerModule} from '@angular/material/datepicker';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatTabsModule,
  MatNativeDateModule,
} from '@angular/material';
import { TestComponent } from 'app/test/test.component';
import { NewTripComponent } from 'app/trip/new-trip/new-trip.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormWizardModule } from 'angular-wizard-form';
import { Ng5SliderModule } from 'ng5-slider';
import { TripListComponent } from 'app/trip/trip-list/trip-list.component';
import { TripService } from 'app/trip/trip.service';
import { HttpClientModule } from '@angular/common/http';
import { TripSingleViewComponent } from 'app/trip/trip-single-view/trip-single-view.component';
import { TripListAdminComponent } from 'app/trip/trip-list-admin/trip-list-admin.component';
import { ModifyTripComponent } from 'app/trip/modify-trip/modify-trip.component';
import { SigninComponent } from 'app/user/signin/signin.component';
import { AppModule } from 'app/app.module';
import { TripsComponent } from 'app/acceuil/trips/trips.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {BookingListComponent} from 'app/booking-list/booking-list.component';
import {NewBookingComponent} from 'app/new-booking/new-booking.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTabsModule,
    NgbModule,
    ArchwizardModule, 
    Ng5SliderModule,
    NgxPaginationModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [TripService,DatePipe,MatDatepickerModule],


  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    TestComponent,
    NewTripComponent,
    TripSingleViewComponent,
    TripListAdminComponent,
    ModifyTripComponent,
    TripListComponent,
    BookingListComponent,
    NewBookingComponent,
  ]
})

export class AdminLayoutModule {}
