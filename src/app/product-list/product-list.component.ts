import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {product_list} from '../product-list'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
public data : any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
     this.http.get(environment.PRODUCT_URL,{responseType:"json"}).subscribe(
        response => {
            this.data = response;
        });

    // this.http.get("assets/data1.json").subscribe(data =>{
    //   console.log(data); 
    //   this.data = data;
    // });
  }


}
