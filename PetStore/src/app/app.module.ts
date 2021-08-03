import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsListComponent } from './pets-list/pets-list.component';

import { FormsModule } from '@angular/forms';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { MessagesComponent } from './messages/messages.component';
import { CustomerSideComponent } from './customer-side/customer-side.component'; // <-- NgModel lives here

import { HttpClientModule } from '@angular/common/http';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HostAdminComponent } from './host-admin/host-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent,
    PetDetailsComponent,
    MessagesComponent,
    CustomerSideComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserDetailsComponent,
    HostAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
