import { Component, OnInit } from '@angular/core';
import { Pet } from '../models/pet';
import { pets } from '../mockData/pets';


@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  pets: Pet[] = pets

  constructor() { }

  ngOnInit(): void {
  }

}
