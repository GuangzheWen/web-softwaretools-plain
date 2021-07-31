import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pet } from '../models/pet';
import { pets } from '../mockData/pets';

import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  // get all pets
  getPets(): Observable<Pet[]> {
    const petsBack = of(pets);
    this.messageService.add(`fetch pets`)
    return petsBack;
  }

  // get pet by id
  getPet(id: number): Observable<Pet> {
    const pet = pets.find(p => p.id === id)!
    this.messageService.add(`fetched pet with id: ${id}`)
    return of(pet)
  }


  constructor(
    private messageService: MessageService
  ) { }
}
