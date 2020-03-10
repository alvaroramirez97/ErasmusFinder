import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { EventsComponent } from './components/events/events.component';
import { ContactComponent } from './components/contact/contact.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { LoginComponent } from './components/sesion/login/login.component';
import { RegisterComponent } from './components/sesion/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { EventdetailsComponent } from './components/eventdetails/eventdetails.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


// MAPA LEAFLET
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


// Login con redes sociales
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider , FacebookLoginProvider } from 'angularx-social-login';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('493432873509-a17e4cerbf7qr145png214n8oo4tnq49.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('Facebook-App-Id')
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MapComponent,
    EventsComponent,
    ContactComponent,
    SesionComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    ContactComponent,
    EventdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LeafletModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
