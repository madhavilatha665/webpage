import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  category:string;
  productDescription: string;
  productId: number;
  productName: string;
  productPrice: number;
  productURL: string;
  constructor() { }

  ngOnInit() {
  }

submit(product){
    localStorage.setItem("id",JSON.stringify(product.value));
    console.log(product.value);

    var user=JSON.parse(localStorage.getItem("id"));
  console.log(user);
 this. category=user.category;
 this. productDescription=user.productDescription;
 this. productId=user.productId;
this. productName=user.productName;
this. productPrice=user.productPrice;
 this. productURL=user.productURL;
  }
}
