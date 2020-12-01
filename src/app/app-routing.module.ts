import { ContactsuccessComponent } from './contactsuccess/contactsuccess.component';
import { BookingsuccessComponent } from './bookingsuccess/bookingsuccess.component';
import { EventselectionComponent } from './eventselection/eventselection.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"booking",
    component:BookingComponent
  },
  {
    path:"userdetails",
    component:UserDetailsComponent
  },
  {
    path:"eventselection",
    component:EventselectionComponent
  },
  {
    path:"bookingsuccess",
    component:BookingsuccessComponent
  },
  {
    path:"contactsuccess",
    component:ContactsuccessComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
