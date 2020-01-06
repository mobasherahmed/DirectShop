import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  islogin;

  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.islogin = this.userService.isLoggin
  }

  logOut(){
    this.userService.isLoggin = false;
    window.alert("You have been logout !! ")
    this.islogin =false;
  }
}
