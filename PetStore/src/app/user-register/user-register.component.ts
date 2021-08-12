import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  username: string = ""
  firstName: string = ""
  lastName: string = ""
  password: string = ""

  status: boolean = false

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  addUser() {
    if (this.username == ''){
      return
    }
    if (this.password == ''){
      return
    }
    let username = this.username
    let firstName = this.firstName
    let lastName = this.lastName
    let password = this.password

    this.userService.addUser({username, firstName, lastName, password} as User)
    .subscribe(res => {
      if (res.code == 200){
        this.status = true
      }
    })
  }

}
