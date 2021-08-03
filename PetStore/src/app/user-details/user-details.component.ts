import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() loginUsername?:string
  user?: User
  modify: boolean = false



  constructor(
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUser()
  }
  getUser() {
    this.userService.getUser(this.loginUsername!)
      .subscribe(user => {
        this.user = user
      })
  }

  modifyUser() {
    this.userService.modifyUser(this.user!)
    .subscribe()
  }

  deleteUser() {
    this.userService.deleteUser(this.user!)
    .subscribe()

  }
}
