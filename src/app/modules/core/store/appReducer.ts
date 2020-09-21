import { initializeState } from '@store/app.state';
import { createReducer, on } from '@ngrx/store';
import * as MovieActions from '@store/actions/movie.actions';

export const initialState = initializeState();

export const _appReducer = createReducer(
  initialState,
  on(MovieActions.getAllMovies, (state) => state),
  on(MovieActions.updateSearchTerm, (state, { searchTerm }) => {
    if (!searchTerm.length) {
      return {
        ...state,
        searchTerm: '',
        movies: initialState.movies,
      };
    } else {
      return {
        ...state,
        searchTerm: searchTerm,
      };
    }
  }),
  on(MovieActions.updateSelectedMovie, (state, { selectedMovie }) => {
    return {
      ...state,
      selectedMovie,
    };
  }),
  on(MovieActions.reset, () => initialState)
);
