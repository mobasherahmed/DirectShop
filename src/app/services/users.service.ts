import { logging } from 'protractor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  basePath = "https://reqres.in/";

  isLoggin:boolean = false;

  userName;

  constructor(private http:HttpClient) { }

  getData(){
   return this.http.get(this.basePath + "api/users?page=2")
  }


  
}
