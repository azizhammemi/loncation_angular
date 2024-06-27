import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/HomeComponent';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RegesterComponent } from './regester/regester.component';
import { ListvoitureComponent } from './listvoiture/listvoiture.component';
import { UsersComponent } from './users/users.component';
import { VoitureComponent } from './voiture/voiture.component';
import { AddvoitureComponent } from './addvoiture/addvoiture.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListLocationComponent } from './list-location/list-location.component';

const routes: Routes = [

  {
    path: '',
    pathMatch:'full',
    component:HomeComponent
  },
  
  {
    path: 'login',
    pathMatch:'full',
    component:LoginComponent
  },
  {
    path: 'user',
    pathMatch:'full',
    component:UsersComponent
  },
  {
    path: 'addvoiture',
    pathMatch:'full',
    component:AddvoitureComponent
  },
  {
    path: 'updatevoiture/:id',
    pathMatch:'full',
    component:AddvoitureComponent
  },
  {
    path: 'reservation/:id',
    pathMatch:'full',
    component:ReservationComponent
  },
  {
    path: 'voiture',
    pathMatch:'full',
    component:VoitureComponent
  },
  {
    path: 'listloc',
    pathMatch:'full',
    component:ListLocationComponent
  },
  {
    path: 'dashboard',
    pathMatch:'full',
    component:DashbordComponent
  },
  {
    path: 'regester',
    pathMatch:'full',
    component:RegesterComponent
  },{
    path: 'listvoitur',
    pathMatch:'full',
    component:ListvoitureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
