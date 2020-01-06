import { products } from './../../products';
import { CartService } from './../../services/cart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;
  
  constructor( private router:Router,private cartService:CartService) { }

  ngOnInit() {}
  
  goToProduct(id){
    this.router.navigate(["/product",id])
  }
  addTocart(item){
    this.cartService.addToCart(item)
  }

  allAvilable = true;
  counter= 4;
  loadMore(){
    for(let i=0;i<3;i++){
      this.products.push({
        id:13,
        name : "Samsung 9",
        price :7000,
        desc : "This is a wider card with supporting text below as a natural lead-in to additional This content is a little bit longer. ",
        img : "assets/img/sliderpic2.jpg",
        category:"Mobiles"
      })
      this.counter++;
        if(this.counter === 9 ){
          this.allAvilable = false
        }
    }
    
  }

} 
