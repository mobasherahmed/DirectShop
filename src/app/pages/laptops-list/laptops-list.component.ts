import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import {products} from '../../products'
  

@Component({
  selector: 'app-laptops-list',
  templateUrl: './laptops-list.component.html',
  styleUrls: ['./laptops-list.component.css']
})
export class LaptopsListComponent implements OnInit {

  items = products
  products =[];
  


  constructor(private router:Router,private cartService:CartService) { }

  ngOnInit() {
    for(let i=0;i<this.items.length;i++ ){
      if(this.items[i].category === "Laptops"){
        this.products.push(this.items[i])
      }
    }
  }
 
   
  goToProduct(id){
    console.log(id)
    this.router.navigate(["/product",id])
  }
  addTocart(item){
    this.cartService.addToCart(item)
  }

  allAvilable = true;
  counter= 4;
  loadMore(){
    for(let i=1;i<=3;i++){
      for(let i=0;i<this.items.length;i++ ){
        if(this.items[i].category === "Laptops"){
          this.products.push(this.items[i])
        }
      }
      this.counter++;
        if(this.counter === 9 ){
          this.allAvilable = false
        }
    }
    
  }


}
