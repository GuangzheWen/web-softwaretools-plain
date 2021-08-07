import { Component, OnInit, Input } from '@angular/core';

import { Pet } from '../models/pet';

// about routing feature
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PetService } from '../service/pet.service';


@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  @Input() pet?: Pet
  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPet()
  }

  getPet() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.petService.getPet(id)
    .subscribe(pet => {
      this.pet = pet
    })
  }

  goBack(): void {
    this.location.back();
  }

  save(url: string, category:string): void {
    if (this.pet) {
      this.pet.photoUrls[0] = url
      this.pet.category.id = 0
      this.pet.category.name = category
      this.petService.updatePet(this.pet)
        .subscribe(() => this.goBack());
    }
  }

}
