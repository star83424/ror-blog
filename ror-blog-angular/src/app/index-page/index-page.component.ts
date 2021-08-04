import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html'
})
export class IndexPageComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  posts: any[];

  pagination: any;

  authorSignedIn: boolean;

  blogger: any;

  goToPage: number;

  totalPage: number;

  perPage: number;

  totalPosts: number;

  /**
   * Init
   *
   * @memberof IndexPageComponent
   */
  ngOnInit() {

    this.activateRoute.paramMap.subscribe(params => {
      console.log(params)
      let bloggerId = params.get('blogger_id');
      if (bloggerId){
        this.getPostsByBloggerId(bloggerId);
      }else {
        this.getPosts();
      }
    })

  }

  goToPost(post){
    console.log("goToPost: ", post);
    this.router.navigate(["posts", {post_id: post.id}]);
  }

  paginate(){
    this.getPosts({
      go_to_page: this.goToPage,
      per_page: this.perPage
    });
  }

  getPostsByBloggerId(bloggerId){
    console.log("getPostsByBloggerId");
    this.getPosts({
      blogger_id: bloggerId
    });
  }

  getPosts(params?: any){
    this.http.get("http://localhost:3000/posts", {
      params: params
    }).subscribe(data => {
      console.log("get Posts data:", data);
      this.initPaginate(data['pagination']);
      this.posts = data['posts'];
      this.blogger = data['blogger'];
      this.authorSignedIn = data['author_signed_in'];
    }, error =>{
      console.log("Error occurs:", error);
      this.router.navigate(["/error"]);
    });
  }

  initPaginate(pagination: any){
    this.goToPage = pagination.current_page? pagination.current_page : 1;
    this.totalPage = (pagination.total_page) ? (pagination.total_page): 1;
    this.perPage = pagination.per_page? pagination.per_page: 10 ;
    this.totalPosts = pagination.total_posts? pagination.total_posts : 0;
  }

  get pages(){
    return [...Array(this.totalPage).keys()];
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
