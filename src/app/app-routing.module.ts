import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'resultado',
    loadChildren: () => import('./pages/search-result/search-result.module').then(m => m.SearchResultModule)
  },
  {
    path: '404',
    loadChildren: () => import('./pages/not-found/not-found-routing.module').then(m => m.NotFoundRoutingModule)
  },

  /* Redirects */
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
