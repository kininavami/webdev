import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    Roles = ['Engineer', 'Manager','Admin'];
  userModel = new User('','9mikini@gmail.com',1234558799,'angular','evening_5PM',true);
  }
