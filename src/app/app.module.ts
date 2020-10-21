import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SelectionComponent } from './selection/selection.component';
import { ShabatComponent } from './shabat/shabat.component';
import { HistoryComponent } from './history/history.component';
import { LikeComponent } from './like/like.component';
import { NewsComponent } from './news/news.component';
import { CertainComponent } from './certain/certain.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    SelectionComponent,
    ShabatComponent,
    HistoryComponent,
    LikeComponent,
    NewsComponent,
    CertainComponent,
    MyRecipesComponent,
    SignInComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
