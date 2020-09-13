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
    return this.store.select((state) => state.app.searchTerm);
  }

  getAllMovies() {
    return this.store.select((state) => state.app.movies);
  }

  updateSearchTerm(value) {
    console.log('value here is ', value);
    this.store.dispatch(updateSearchTerm({ searchTerm: value }));
  }
}