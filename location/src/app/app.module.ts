import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './navbar/nav.component';
import { HomeComponent } from './home/HomeComponent';
import { LoginComponent } from './login/login.component';
import { FirebaseModule } from './Firebase.module ';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RegesterComponent } from './regester/regester.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule

import { TableModule } from 'primeng/table';
import { UsersComponent } from './users/users.component';
import { VoitureComponent } from './voiture/voiture.component';
import { ConfirmedalougComponent } from './confirmedaloug/confirmedaloug.component';
import { AddvoitureComponent } from './addvoiture/addvoiture.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListLocationComponent } from './list-location/list-location.component';

import { NgChartsModule } from 'ng2-charts';
import { LocdateComponent } from './locdate/locdate.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    DashbordComponent,
    RegesterComponent,
    UsersComponent,
    VoitureComponent,
    ConfirmedalougComponent,
    AddvoitureComponent,
    ReservationComponent,
    ListLocationComponent,
    LocdateComponent,
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    FormsModule,
    NgChartsModule,
    SlickCarouselModule
    

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
