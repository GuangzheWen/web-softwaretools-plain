import { Injectable } from '@angular/core';

import { Pet } from '../models/pet';
import { pets } from '../mockData/pets';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  getPets(): Pet[]{
    return pets
  }
  constructor() { }
}
