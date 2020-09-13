import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateSearchTerm } from '@store/actions/movie.actions';
import AppState from '@store/app.state';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private store: Store<AppState>) {}

  getSearchTerm() {
    return this.store.select((state) => state.searchTerm);
  }

  getAllMovies() {
    return this.store.select((state) => state.movies);
  }

  updateSearchTerm(value) {
    this.store.dispatch(updateSearchTerm({ searchTerm: value }));
  }
}
