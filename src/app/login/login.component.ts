import { Component, OnInit } from '@angular/core';
import { FormDetails } from '../FormDetails';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormDetails("test","test","test","test");
  constructor() { }

  ngOnInit(): void {
    
  }

}
