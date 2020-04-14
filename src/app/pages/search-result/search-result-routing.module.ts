import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultComponent } from './search-result.component';
import { SearchResultResolver } from './search-result.resolver';

const routes: Routes = [
  {
    path: '',
    component: SearchResultComponent,
    resolve: {
      search: SearchResultResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchResultRoutingModule { }
