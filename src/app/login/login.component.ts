import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string;
  password: string;

  error: any;

  constructor(
  ) {
    this.user = "";
    this.password = "";
   }

   login(){
     console.log(this.user);
     console.log(this.password);
   }


  ngOnInit(): void {
  }




}
