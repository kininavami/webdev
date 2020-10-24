import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['angular', 'react','none'];
  userModel = new User('','9mikini@gmail.com',1234558799,'angular','evening_5PM',true);
}
