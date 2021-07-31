import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsListComponent } from './pets-list/pets-list.component';

import { FormsModule } from '@angular/forms';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { MessagesComponent } from './messages/messages.component';
import { CustomerSideComponent } from './customer-side/customer-side.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent,
    PetDetailsComponent,
    MessagesComponent,
    CustomerSideComponent
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
