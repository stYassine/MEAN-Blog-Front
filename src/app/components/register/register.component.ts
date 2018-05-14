import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';

import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  user: User ={
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  };

  register(){
    this.authService.userRegister(this.user).subscribe(user => {
      console.log(user);
    });
  }

}
