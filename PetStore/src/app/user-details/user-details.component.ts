import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() loginUsername?:string
  user?: User
  constructor(
    private userService: UserService
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
}
