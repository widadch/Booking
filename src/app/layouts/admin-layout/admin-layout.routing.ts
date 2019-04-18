import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { TestComponent } from 'app/test/test.component';
import { NewTripComponent } from 'app/trip/new-trip/new-trip.component';
import { TripListComponent } from 'app/trip/trip-list/trip-list.component';
import { TripSingleViewComponent } from 'app/trip/trip-single-view/trip-single-view.component';
import { TripListAdminComponent } from 'app/trip/trip-list-admin/trip-list-admin.component';
import { ModifyTripComponent } from 'app/trip/modify-trip/modify-trip.component';
import { SigninComponent } from 'app/user/signin/signin.component';
import { TripsComponent } from 'app/acceuil/trips/trips.component';
import { BookingListComponent } from 'app/booking-list/booking-list.component';
import { NewBookingComponent } from 'app/new-booking/new-booking.component';

export const AdminLayoutRoutes: Routes = [
    
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'test/:id',           component: TestComponent},

    //{ path: 'typography',     component: TypographyComponent },
    //{ path: 'icons',          component: IconsComponent },
    //{ path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'newTrip',        component: NewTripComponent },
    { path: 'Trips',        component: TripListAdminComponent },
    { path: 'listTrip',        component: TripListComponent },
    { path: 'trips/:id', component: TripSingleViewComponent,pathMatch: 'full'},
    { path: 'modifyTrips/:id',component:ModifyTripComponent},
    {path:  'bookings/:id'   ,component:BookingListComponent},
    { path: 'newB/:id/:id1',component:NewBookingComponent},
 

   // { path: 'modifyTrip/:id', component: ,pathMatch: 'full'}


];
