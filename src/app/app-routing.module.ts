import { SignInComponent } from './sign-in/sign-in.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { CertainComponent } from './certain/certain.component';
import { NewsComponent } from './news/news.component';
import { LikeComponent } from './like/like.component';
import { HistoryComponent } from './history/history.component';
import { ShabatComponent } from './shabat/shabat.component';
import { SelectionComponent } from './selection/selection.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

 const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'main',component:MainComponent},
  {path:'selection',component:SelectionComponent},
  {path:'Shabat',component:ShabatComponent},
  {path:'History',component:HistoryComponent},
  {path:'like',component:LikeComponent},
  {path:'news',component:NewsComponent},
  {path:'certain-recipy',component:CertainComponent},
  {path:'my-recipes',component:MyRecipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
