import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    
  }

  user: User ={
    email: '',
    password: ''
  };

  login(){
    
    this.authService.userLogin(this.user).subscribe(user => {
      
    });

  }

}
