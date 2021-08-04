import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html'
})
export class EditPageComponent implements OnInit {

  constructor(private router: Router) { }

  post: any = {};

  ngOnInit() {
  }

  /**
   * 編輯 （待串接）
   *
   * @memberof EditPageComponent
   */
  edit(){
    // TODO: Wait to connect to edit api with auth token
    console.log("Edit post: ", this.post);
    this.router.navigate(['']);
  }


}
