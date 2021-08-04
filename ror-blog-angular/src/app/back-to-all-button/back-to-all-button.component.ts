import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-all-button',
  templateUrl: './back-to-all-button.component.html'
})
export class BackToAllButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * 回到所有文章列表
   *
   * @memberof EditPageComponent
   */
   backToAll(){
    this.router.navigate(['']);
  }

}
