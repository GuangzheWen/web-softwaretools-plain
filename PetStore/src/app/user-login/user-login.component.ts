import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../models/user';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string = ""
  password: string = ""

  status: boolean = false
  
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  login() {
    let username = this.username
    let password = this.password

    this.userService.login({username, password} as User)
    .subscribe(res => {
      // if ((res.code != 200) || !res){
      //   alert('not exist')
      // }else{
      //   this.status = true
      // }
    })

    this.userService.getUser(username)
    .subscribe(res => {
      if (res){
        // console.log(res)
        this.status = true
      }else{
        alert('not exist user')
      }
      
    })
  }

  logout() {
    this.status = false
  }

}
