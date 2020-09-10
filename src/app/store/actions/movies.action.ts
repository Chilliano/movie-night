import { Action } from '@ngrx/store';
import { MoviesActionTypes } from '../types/movies.types';

// Always return an array even for one
export class GetMoviesAction implements Action {
  readonly type = MoviesActionTypes.GET_MOVIES;
  constructor() {}
}

export type MoviesAction = GetMoviesAction;
