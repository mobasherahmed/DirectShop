import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  product;
 
  constructor(private http: HttpClient, private router:Router) { }
  
  goToProduct(product,productId){
    this.product = product;
    this.router.navigate(["/product",productId])

  }
  addToCart(product){
    window.alert("this product has been added to your cart ")
    this.items.push(product)
    console.log(this.items) 
  }
  getItems(){
    return this.items
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrice(){
    return this.http.get("/assets/shipping.json");
   }

}
