import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signing-buttons',
  templateUrl: './signing-buttons.component.html'
})
export class SigningButtonsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  signUp(){
    window.location.href = "http://localhost:3000/authors/sign_up";
  }

  signIn(){
    window.location.href = "http://localhost:3000/authors/sign_in";
  }

  signOut(){
    // TODO: connect to a sign_out api
    // window.location.href = "http://localhost:3000/authors/sign_out";
    this.router.navigate(["/error"]);
  }

}
