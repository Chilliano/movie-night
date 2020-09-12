import { Action } from '@ngrx/store';
import { AppActionTypes } from '../types/app.types';

export class GetMovies implements Action {
  readonly type = AppActionTypes.GET_MOVIES;
  constructor() {}
}

export type AppAction = GetMovies;
