import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pet } from '../models/pet';
import { pets } from '../mockData/pets';

import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  getPets(): Observable<Pet[]> {
    const petsBack = of(pets);
    this.messageService.add(`fetch pets`)
    return petsBack;
  }
  constructor(
    private messageService: MessageService
  ) { }
}
