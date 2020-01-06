import { products } from './../../products';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-mobiles-list',
  templateUrl: './mobiles-list.component.html',
  styleUrls: ['./mobiles-list.component.css']
})
export class MobilesListComponent implements OnInit {

 items = products
  products = [];


  constructor(private router:Router,private cartService:CartService) { }

  ngOnInit() {
    for(let i=0;i<this.items.length;i++ ){
      if(this.items[i].category === "Mobiles"){
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
        if(this.items[i].category === "Mobiles"){
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
