import { PostPageComponent } from './post-page/post-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';


const routes: Routes = [{
  path: "",
  component: IndexPageComponent
},{
  path: "edit",
  component: EditPageComponent
},{
  path: "posts",
  component: PostPageComponent
},{
  path: "error",
  component: ErrorPageComponent
// },{
//   path: "**",
//   redirectTo: "",
//   pathMatch: "full"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
