import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { MoviesComponent } from '@components/movies/movies.component';
import { MovieDetailsComponent } from '@components/movies/movie-details/movie-details.component';
import { NotFoundComponent } from '@components/layout/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
