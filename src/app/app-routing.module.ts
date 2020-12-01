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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
