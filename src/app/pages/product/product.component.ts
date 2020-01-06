import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { products } from './../../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  id;
  products = products;
  product;
  
  constructor(private route: ActivatedRoute,
     private router: Router,private cartService:CartService ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(value => {
       this.id = value.get('id') ;
      for(let i=0;i<this.products.length;i++){
        if(products[i].id == this.id){
          this.product = products[i];
        }
      }
    })
    
  }
addToCart(item){
  this.cartService.addToCart(item) ;
    
}


 

  comments = [
    {
      img: "assets/img/ceo1.jpg",
      name: "Aliex toson",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      img: "assets/img/ceo2.jpg",
      name: "pranndesky lorsm",
      body: "ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      img: "assets/img/ceo3.jpg",
      name: "lamioni startfish",
      body: " Labore, excepturi odit officiis eos veniam assumenda fuga accusantium eligendi molestiae."
    },
    {
      img: "assets/img/ceo4.png",
      name: "tesa alexandro",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
  ] 

  public Editor = ClassicEditor;

}
