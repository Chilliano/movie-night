import { Action } from '@ngrx/store';
import { MoviesActionTypes } from '@types/movies.types';

export class GetMoviesAction implements Action {
  readonly type = MoviesActionTypes.GET_MOVIES;
  constructor(public payload?: string[] | number[]) {}
}

export class GetMovieDetailsAction implements Action {
  readonly type = MoviesActionTypes.GET_MOVIE_DETAILS;
  constructor(public payload: number) {}
}

export type AppActions = GetMoviesAction | GetMovieDetailsAction;
