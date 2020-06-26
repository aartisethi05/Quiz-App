import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuizComponent} from './quiz/quiz.component';
import {ResultComponent} from './result/result.component';
import {DetailsComponent} from './details/details.component';
const routes: Routes = [
  {path:'',component:DetailsComponent},
  {path:'quiz',component:QuizComponent},
  {path:'result',component:ResultComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
