import { Component, OnInit } from '@angular/core';

import { Pet } from '../models/pet';
import { PetService } from '../service/pet.service';

@Component({
  selector: 'app-customer-side',
  templateUrl: './customer-side.component.html',
  styleUrls: ['./customer-side.component.css']
})
export class CustomerSideComponent implements OnInit {

  pets: Pet[] = []
  isR: boolean = false
  isL: boolean = false
  constructor(
    private petService: PetService
  ) { }

  ngOnInit(): void {
    this.getPets()
  }

  getPets(){
    this.petService.getPets()
    .subscribe(pets => {
      this.pets = pets
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
