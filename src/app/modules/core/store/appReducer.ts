import AppState, { initializeState } from '@store/app.state';
import { createReducer, Action, on } from '@ngrx/store';
import * as MovieActions from '@actions/movies.action';

export const intialState = initializeState();

export const reducer = createReducer(
  intialState,
  on(MovieActions.GetAllMoviesAction, (state) => state)
);

export function AppReducer(state: AppState | undefined, action: Action) {
  return reducer(state, action);
}
