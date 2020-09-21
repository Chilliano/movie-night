import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MovieModel } from '@models/movie.model';
import { Store } from '@ngrx/store';
import {
  updateSearchTerm,
  updateSelectedMovie,
} from '@store/actions/movie.actions';
import AppState from '@store/app.state';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(
    private store: Store<{ app: AppState }>,
    private router: Router
  ) {}

  getSearchTerm() {
    return this.store.select((state) => state.app.searchTerm);
  }

  getAllMovies() {
    return this.store.select((state) => state.app.movies);
  }

  updateSearchTerm(value) {
    this.store.dispatch(updateSearchTerm({ searchTerm: value }));
  }

  selectMovie(selectedMovie: MovieModel) {
    this.store.dispatch(updateSelectedMovie({ selectedMovie }));
    this.router.navigate(['/movies', `${selectedMovie.id}`]);
  }
}
