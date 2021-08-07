import { Component, OnInit } from '@angular/core';

import { Pet } from '../models/pet';
import { PetService } from '../service/pet.service';
import { MessageService } from '../service/message.service';



@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})

// This is a List component for displaying pets.
// But not store data, only for View in MVC.

export class PetsListComponent implements OnInit {

  // mock static data 
  pets: Pet[] = []
  idArray: number[] = []

  getPets(){
    this.petService.getPets()
    .subscribe(pets => {
      this.pets = pets
    })
    ;
  }

  constructor(
    private petService:PetService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getPets();
  }

  add(name: string): void {
    name = name.trim();
    let id = 10000001
    let status = 'team2'
    let category = {
      id : 0,
      name: ""
    }
    let photoUrls = [""]
    if (!name) { return; }
    
    if (this.pets.length > 0){
      this.pets.map(pet => {
        this.idArray.push(pet.id)
      })
      id = Math.max(...this.idArray) + 1
    }
    
    this.petService.addPet({ name, id, status,photoUrls, category} as Pet)
      .subscribe(pet => {
        this.pets.push(pet);
      });
  }

  delete(pet: Pet): void {
    this.pets = this.pets.filter(p => p !== pet);
    this.petService.deletePet(pet.id).subscribe();
  }

}
