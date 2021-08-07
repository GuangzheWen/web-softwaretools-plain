import { Component, OnInit } from '@angular/core';

import { Pet } from '../models/pet';
import { PetService } from '../service/pet.service';

@Component({
  selector: 'app-customer-side',
  templateUrl: './customer-side.component.html',
  styleUrls: ['./customer-side.component.css']
})
export class CustomerSideComponent implements OnInit {

  originPets: Pet[] = []
  pets: Pet[] = []
  isR: boolean = false
  isL: boolean = false

  categoryInput = ""
  nameInput = ""

  fingByCategory(){
    let returnPets: Pet[] = []
    this.originPets.forEach(pet => {
      if(pet.category.name == this.categoryInput ){
        returnPets.push(pet)
      }
    });
    this.pets = returnPets
  }

  findByNane(){
    let returnPets: Pet[] = []
    this.originPets.forEach(pet => {
      if(pet.name == this.nameInput ){
        returnPets.push(pet)
      }
    });
    this.pets = returnPets
  }

  constructor(
    private petService: PetService
  ) { }

  ngOnInit(): void {
    this.getPets()
  }

  getPets(){
    this.petService.getPets()
    .subscribe(pets => {
      this.originPets = pets
      this.pets = this.originPets
    })
  }

  isRegister(){
    this.isR = true;
    this.isL = false
  }
  isLogin(){
    this.isL = true
    this.isR = false;
  }
}
