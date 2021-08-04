import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { SigningButtonsComponent } from './signing-buttons/signing-buttons.component';
import { BackToAllButtonComponent } from './back-to-all-button/back-to-all-button.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    SideMenuComponent,
    ErrorPageComponent,
    PostPageComponent,
    EditPageComponent,
    SigningButtonsComponent,
    BackToAllButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
