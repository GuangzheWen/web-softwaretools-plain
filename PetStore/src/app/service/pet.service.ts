import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pet } from '../models/pet';
import { pets } from '../mockData/pets';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  getPets(): Observable<Pet[]> {
    const petsBack = of(pets);
    return petsBack;
  }
  constructor() { }
}
