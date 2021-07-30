import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/pet';
import { pets } from '../mockData/pets';


@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})

// This is a List component for displaying pets.
// But not store data, only for View in MVC.

export class PetsListComponent implements OnInit {

  // mock static data 
  pets: Pet[] = pets
  selectedPet?: Pet

  onSelect(pet: Pet){
    this.selectedPet = pet
    console.log(1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
