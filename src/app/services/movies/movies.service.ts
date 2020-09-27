import { Injectable } from '@angular/core';
// models
import { MovieModel } from '@models/movie.model';
// services
import { RouterService } from '@services/router/router.service';
// store
import { Store } from '@ngrx/store';
import AppState from '@store/app.state';
import {
  updateGenresSelected,
  updateFilterTerm,
  updateSelectedMovie,
} from '@store/actions/movie.actions';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(
    private store: Store<{ app: AppState }>,
    private routerService: RouterService
  ) {}

  // selectors
  getFilterTerm() {
    return this.store.select((state) => state.app.filterTerm);
  }

  getSelectedGenres() {
    return this.store.select((state) => state.app.selectedGenres);
  }

  getAllMovies() {
    return this.store.select((state) => state.app.movies);
  }

  // actions
  updateFilterTerm(value) {
    this.store.dispatch(updateFilterTerm({ filterTerm: value }));
  }

  resetSearch() {
    this.store.dispatch(updateFilterTerm({ filterTerm: '' }));
  }

  selectMovie(selectedMovie: MovieModel) {
    if (selectedMovie) {
      this.store.dispatch(updateSelectedMovie({ selectedMovie }));
      this.routerService.goToMoviesDetailsPage(selectedMovie.id);
    }
  }

  getSelectedMovie(id: number) {
    return this.store.select((state) => {
      const match = state.app.movies.filter((movie) => movie.id === id);
      if (match[0] !== undefined) {
        return match[0];
      } else {
        this.routerService.goHome();
      }
    });
  }

  updateSelectedGenres(selectedGenres: string[]) {
    return this.store.dispatch(updateGenresSelected({ selectedGenres }));
  }
}
