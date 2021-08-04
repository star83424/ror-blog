import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html'
})
export class PostPageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log("PostPageComponent params:", params)

    })
  }

  edit(){
    this.router.navigate(["edit"]);
  }

  delete(){
    // TODO: wait for api
    this.router.navigate(["/"]);
  }
}
