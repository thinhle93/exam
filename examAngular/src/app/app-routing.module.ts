import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlphaComponent } from './alpha/alpha.component';
import { NewrestaurantComponent } from './newrestaurant/newrestaurant.component';
import { ReviewrestComponent } from './reviewrest/reviewrest.component';
import { UpdaterestComponent } from './updaterest/updaterest.component';
import { NewreviewComponent } from './newreview/newreview.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/alpha'},
  { path: 'alpha', component: AlphaComponent },
  { path: 'newrestaurant', component: NewrestaurantComponent },
  { path: 'reviewrest/:id', component: ReviewrestComponent },
  { path: 'updaterest/:d', component: UpdaterestComponent },
  { path: 'newreview/:id', component: NewreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
