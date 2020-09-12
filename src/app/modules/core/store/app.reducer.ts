import { AppActionTypes } from '@store/types/app.types';
import { AppStateModel } from '@models/app-state.model';
import { initialAppState } from '@core/store/initial-app-state';
import { Action } from '@ngrx/store';

export function AppReducer(
  state: AppStateModel = initialAppState,
  action: Action
) {
  const { type } = action;

  switch (type) {
    case AppActionTypes.GET_MOVIES:
      return initialAppState.movies;
    default:
      return state;
  }
}
