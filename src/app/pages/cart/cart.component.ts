import { logging } from 'protractor';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = [];
  checkoutForm;
  total = 0;

  empty: boolean = false;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    console.log(this.items)
    for(let i=0;i<this.items.length;i++){
      this.total += this.items[i].price ;
    }
    console.log(this.total)
    if (this.items.length > 0) {
      this.empty = true;
    }

    this.checkoutForm = this.formBuilder.group({
      Name: '',
      Address: '',
      Phone : ' ',
      VisaCart  : ' ',
      Password  : ' ',
    })

  }

  onSubmit() {
    // Process checkout data here
    window.alert('Your order has been submitted');
    this.items = this.cartService.clearCart();
    this.empty = false;
    this.checkoutForm.reset();
  }

  deleteItem(item , total) {
    console.log(total)
     this.total= total - item.price ;
    console.log(this.total)
    this.items.splice(item,1)
    if (this.items.length === 0) {
      this.empty = false;
    }
    
  }




}
