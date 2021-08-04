import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() loginUsername?:string
  @Output() backEvent = new EventEmitter<boolean>();


  user?: User
  emptyUser?: User
  modify: boolean = false



  constructor(
    private userService: UserService,

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
    .subscribe(_ => {
      this.user = this.emptyUser
    })
    this.backEvent.emit(true);
  }

}
