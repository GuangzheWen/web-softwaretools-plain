import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PetsListComponent } from './pets-list/pets-list.component'
import { CustomerSideComponent } from './customer-side/customer-side.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { HostAdminComponent } from './host-admin/host-admin.component';

const routes: Routes = [
  { path: 'pets', component: PetsListComponent },
  { path: 'customerSide', component: CustomerSideComponent},
  { path: '', redirectTo: '/pets', pathMatch: 'full' },
  { path: 'detail/:id', component: PetDetailsComponent},
  { path: 'host', component: HostAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
