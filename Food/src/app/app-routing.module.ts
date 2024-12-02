import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'item/:id', component: FoodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
