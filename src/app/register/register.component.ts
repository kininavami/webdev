import { User } from './../user';
import{HttpClient} from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http : HttpClient,private router: Router){}
    Roles = ['Engineer', 'Manager','Admin'];
  //userModel = new User('','9mikini@gmail.com',1234558799,'angular','evening_5PM',true);
  OnSubmit(data){
    this.http.post(environment.USER_URL,data).subscribe((result)=>{
      this.router.navigate(['/product-list']);
      console.log(result);
    }, (error: any) => {
      console.error(error);
    });
   
  }
  }
