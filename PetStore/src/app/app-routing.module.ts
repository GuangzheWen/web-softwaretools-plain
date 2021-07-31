import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PetsListComponent } from './pets-list/pets-list.component'

const routes: Routes = [
  { path: 'pets', component: PetsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
