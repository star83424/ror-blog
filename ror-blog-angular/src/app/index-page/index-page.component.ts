import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html'
})
export class IndexPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  posts: any[];

  pagination: any;

  author_signed_in: boolean;

  blogger: any;

  toPage: number;

  totalPages: number;

  perPage: number;

  ngOnInit() {
    this.http.get('http://localhost:3000/posts').subscribe(data => {
      console.log("QQQQQQQQ", data);
      this.author_signed_in = data['author_signed_in'];
    });

    this.initPaginate();
  }

  goToPost(){

  }

  paginate(){

  }

  goToSignUp(){
    window.location.href = "http://localhost:3000/authors/sign_up";
  }

  goToSignIn(){
    window.location.href = "http://localhost:3000/authors/sign_in";
  }

  goToSignOut(){
    window.location.href = "http://localhost:3000/authors/sign_out";
  }


  initPaginate(){
    this.toPage = this.toPage? this.toPage : 1;
    this.totalPages = (this.pagination && this.pagination.totalPages) ? (this.pagination.totalPages): 1;
  }

  get pages(){
    return [...Array(this.totalPages).keys()];
  }

}
