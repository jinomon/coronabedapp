import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoronabedstatusComponent } from './coronabedstatus/coronabedstatus.component';
import { CoronabedComponent } from './coronabed/coronabed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';


const myroutes=[

  {path:"",component:CoronabedComponent},
  {path:"coronabedstatus",component:CoronabedstatusComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    CoronabedstatusComponent,
    CoronabedComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
