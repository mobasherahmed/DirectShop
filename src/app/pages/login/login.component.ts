import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail;
  userPass;

  userError;
  passError;
  users = [
    {
      firstName: "Ahmed",
      lastName: "Mobasher",
      email: "ahmed@gmail.com",
      pass: 123456789,
      img: "a.jpg"
    },
    {
      firstName: "Hassan",
      lastName: "Mobasher",
      email: "hassan@gmail.com",
      pass: 987654321,
      img: "h.jpg"
    }
  ];

  reg = false;

  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit() {
  }
  
  login(email, pass) {
    this.userEmail = email;
    this.userPass = pass;
    if (this.userEmail && this.userPass) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.userEmail == this.users[i].email &&
          this.userPass == this.users[i].pass) {
          this.userService.isLoggin = true;
          this.router.navigate(["/"])
          return window.alert("You have been login with username : " + this.userEmail)
        } else if (this.userEmail !== this.users[i].email) {
          return window.alert("You Enter Incorrect Email !!")
        } else if (this.userPass !== this.users[i].pass) {
          return window.alert("You Enter Incorrect Pass !!")
        }
      }
    } else if (!this.userEmail) {
      this.userError = "You Must Enter UserName  !!";
    } else if (!this.userPass) {
      this.passError = "You Must Enter PassWord !!";
    }
    else {
      this.userError = "You Must Enter Correct UserName  !!";
      this.passError = "You Must Enter Correct PassWord !!";
    }
  }
  regyes() {
    this.reg = true;
  }
  noreg() {
    this.reg = false;
  }
  register(firstName, lastName, email, pass, img) {
    if (email && pass) {
      this.users.push({ firstName, lastName, email, pass, img })
      console.log(this.users)
      window.alert("You have been Register with username : " + email)
      this.userService.isLoggin = true;
      this.router.navigate(["/"])
    } else if (!email) {
      return this.userError = "You Must Enter UserName  !!";
    } else if (!pass) {
      return this.passError = "You Must Enter PassWord !!";
    }
    else {
      this.userError = "You Must Enter UserName  !!";
      this.passError = "You Must Enter PassWord !!";
    }
  }

}
