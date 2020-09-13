import { initializeState } from '@store/app.state';
import { createReducer, on } from '@ngrx/store';
import * as MovieActions from '@store/actions/movie.actions';

export const initialState = initializeState();

export const _appReducer = createReducer(
  initialState,
  on(MovieActions.getAllMovies, (state) => state),
  on(MovieActions.updateSearchTerm, (state, { searchTerm }) => {
    return {
      ...state,
      searchTerm: searchTerm,
    };
  }),
  on(MovieActions.reset, () => initialState)
);
