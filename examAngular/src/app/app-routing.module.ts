import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlphaComponent } from './alpha/alpha.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/alpha'},
  { path: 'alpha', component: AlphaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
