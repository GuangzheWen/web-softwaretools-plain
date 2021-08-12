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
  isL: boolean = true

  categoryInput = ""
  nameInput = ""

  fingByCategory(){
    if (this.categoryInput != ""){
      let returnPets: Pet[] = []
      this.originPets.forEach(pet => {
        if(pet.category.name.search(this.categoryInput) != -1 ){
          returnPets.push(pet)
        }
      });
      this.pets = returnPets
    }
  }

  findByNane(){
    if (this.nameInput != "") {
      let returnPets: Pet[] = []
      this.originPets.forEach(pet => {
        if(pet.name.search(this.nameInput) != -1 ){
          returnPets.push(pet)
        }
      });
      this.pets = returnPets
    }
  }

  clear(){
    this.nameInput = ""
    this.categoryInput = ""
    this.pets = this.originPets
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
