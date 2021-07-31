import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PetsListComponent } from './pets-list/pets-list.component'
import { CustomerSideComponent } from './customer-side/customer-side.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';

const routes: Routes = [
  { path: 'pets', component: PetsListComponent },
  { path: 'customerSide', component: CustomerSideComponent},
  { path: '', redirectTo: '/customerSide', pathMatch: 'full' },
  { path: 'detail/:id', component: PetDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
