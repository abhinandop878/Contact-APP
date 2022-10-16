import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewAllContactsComponent } from './view-all-contacts/view-all-contacts.component';
import {HttpClientModule} from '@angular/common/http'
const appRoutes:Routes=[
  {
    path:"",component:ViewAllContactsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewAllContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
