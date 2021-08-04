import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html'
})
export class SideMenuComponent implements OnInit {

  constructor(private router: Router) { }

  isLoggedIn: boolean;

  user: any;

  ngOnInit() {
  }

  goToAllPost(){
    this.router.navigate(['']);
  }

  goToMyBlog(){
    this.router.navigate(['error']);
  }
}
