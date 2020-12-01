import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';
import { CardsComponent } from './cards/cards.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { EventselectionComponent } from './eventselection/eventselection.component';
import { BookingsuccessComponent } from './bookingsuccess/bookingsuccess.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    BookingComponent,
    CardsComponent,
    UserDetailsComponent,
    EventselectionComponent,
    BookingsuccessComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
