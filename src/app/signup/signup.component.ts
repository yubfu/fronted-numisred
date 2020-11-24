import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  error: any;
  username:string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor(

  ) { 

    this.username = "";
    this.email="";
    this.password = "";
    this.confirmPassword= "";
  }

  ngOnInit(): void {
  }

  register(){
    console.log(this.username);
    console.log(this.email);
    console.log(this.password);

  }

}
