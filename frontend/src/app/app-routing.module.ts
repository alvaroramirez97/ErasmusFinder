import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { LoginComponent } from './components/sesion/login/login.component';
import { RegisterComponent } from './components/sesion/register/register.component';
import { MapComponent } from './components/map/map.component';
import { EventsComponent } from './components/events/events.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventdetailsComponent } from './components/eventdetails/eventdetails.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: '/sesion/login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    redirectTo: '/sesion/register',
    pathMatch: 'full'
  },

  {
    path: 'home', component: HomeComponent
  },

  {
    path: 'sesion', component: SesionComponent, children: [
      {
        path: '',
        redirectTo: '/sesion/login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },

  {
    path: 'map', component: MapComponent
  },
  {
    path: 'perfil', component: PerfilComponent
  },

  {
    path: 'events', component: EventsComponent
  },
  {
    path: 'events/:id', component: EventdetailsComponent
  },
  {
    path: 'contact', component: ContactComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
