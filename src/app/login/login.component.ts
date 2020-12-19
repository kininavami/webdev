import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormDetails } from '../FormDetails';
import { login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //form = new FormDetails("test","test","test","test");
  constructor(private http : HttpClient,private router: Router) { }
  name: string="";
  password : string = "";
  showErrorMessage = false;
  ngOnInit(): void {
    
  }
  OnLogin(){
   // var data = "username=" +this.name+"password="+this.password;
 
    var data = new login(this.name,this.password);
   // console.log(this.name);
   this.http.post(environment.LOGIN_URL,data).subscribe((result)=>{
    this.router.navigate(['/product-list']);
    console.log(result);
  }, (error: any) => {
    console.error(error);
    this.showErrorMessage = true;
  });
  }
}
