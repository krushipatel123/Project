import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Budget } from './bdget-demo-project/budget.model';

const routes: Routes = [
  {
    path: 'budget',
    component: Budget
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
