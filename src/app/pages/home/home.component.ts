import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items;
  user;
  constructor(private userService:UsersService) { }

  ngOnInit() {
  }

  login(){
    this.userService.isLoggin = true; 
  }
  logout(){
    this.userService.isLoggin = false;
  }

  getUsers(){
    this.userService.getData().subscribe(res=>{
      this.items = res;
      
    })
  }


}
