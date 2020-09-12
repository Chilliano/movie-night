import { AppAction } from '../actions/app.action';
import { AppActionTypes } from '../types/app.types';
import { initialState } from '../initial-state';
import { AppStateModel } from '../models/app-state.model';

export function AppReducer(
  state: AppStateModel = initialState,
  action: AppAction
) {
  const { type } = action;

  switch (type) {
    case AppActionTypes.GET_MOVIES:
      console.log('initialState.movies is ', initialState.movies);
      return initialState.movies;
    default:
      return state;
  }
}
