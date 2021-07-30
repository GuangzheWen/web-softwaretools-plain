import { Component, OnInit } from '@angular/core';

import { Pet } from '../models/pet';
import { PetService } from '../service/pet.service';



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
  selectedPet?: Pet

  onSelect(pet: Pet){
    this.selectedPet = pet
  }

  getPets(){
    this.petservice.getPets()
    .subscribe(pets => {
      this.pets = pets
    })
    ;
  }

  constructor(
    private petservice:PetService
  ) { }

  ngOnInit(): void {
    this.getPets();
  }

}
