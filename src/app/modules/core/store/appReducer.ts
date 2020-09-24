import { initializeState } from '@store/app.state';
import { createReducer, on } from '@ngrx/store';
import * as MovieActions from '@store/actions/movie.actions';

export const initialState = initializeState();

export const _appReducer = createReducer(
  initialState,
  // retrieve all movies
  on(MovieActions.getAllMovies, (state) => state),

  on(MovieActions.updateFilterTerm, (state, { filterTerm }) => {
    if (!filterTerm.length) {
      return {
        ...state,
        filterTerm: '',
        movies: initialState.movies,
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
      selectedGenres,
    };
  }),
  on(MovieActions.reset, () => initialState)
);
