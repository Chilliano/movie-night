import { Action } from '@ngrx/store';
import { MoviesActionTypes } from '../types/movies.types';

export class GetMoviesAction implements Action {
  readonly type = MoviesActionTypes.GET_MOVIES;
  constructor(public payload?: string[] | number[]) {}
}

export class GetMovieDetails implements Action {
  readonly type = MoviesActionTypes.GET_MOVIE_DETAILS;
  constructor(public payload: number) {}
}

export type MoviesAction = GetMoviesAction | GetMovieDetails;
