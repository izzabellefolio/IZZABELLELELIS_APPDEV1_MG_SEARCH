import { Routes, RouterModule } from '@angular/router';
import { SearchBar } from './search-bar/search-bar';
import { SearchResults } from './search-results/search-results';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'bar', component: SearchBar },
  { path: 'results', component: SearchResults },
  { path: '', redirectTo: 'bar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
