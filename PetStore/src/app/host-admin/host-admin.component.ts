import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-host-admin',
  templateUrl: './host-admin.component.html',
  styleUrls: ['./host-admin.component.css']
})
export class HostAdminComponent implements OnInit {

  password: string = 'admin'
  passwordInput: string = ''

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  check() {
    if (this.passwordInput != this.password){
      alert('wrong password')
    }
    else {
      this.router.navigateByUrl('/pets') 
      
    }
  }
}
