import { initializeState } from '@store/app.state';
import { createReducer, on } from '@ngrx/store';
import * as MovieActions from '@store/actions/movie.actions';

import { filterByGenre } from '@functions/filter-by-genre.function';

export const initialState = initializeState();

export const _appReducer = createReducer(
  initialState,
  on(MovieActions.getAllMovies, (state) => state),
  on(MovieActions.updateFilterTerm, (state, { filterTerm }) => {
    if (!filterTerm.length) {
      return {
        ...state,
        filterTerm: '',
        movies: state.movies,
      };
    } else {
      return {
        ...state,
        filterTerm: filterTerm,
      };
    }
  }),
  on(MovieActions.updateSelectedMovie, (state, { selectedMovie }) => {
    return {
      ...state,
      selectedMovie,
    };
  }),
  on(MovieActions.updateGenresSelected, (state, { selectedGenres }) => {
    return {
      ...state,
      movies: selectedGenres.length
        ? filterByGenre(initialState.movies, selectedGenres)
        : initialState.movies,
      selectedGenres,
      filterTerm: '',
    };
  }),
  on(MovieActions.reset, () => initialState)
);
