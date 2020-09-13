import { createAction, props } from '@ngrx/store';

export const setAllMovies = createAction('[Movies] Set Movies');
export const getAllMovies = createAction('[Movies] Get Movies');
export const getOneMovie = createAction(
  '[Movies] Get ONE Movie',
  props<{ id: Number }>()
);
export const getMoviesSuccess = createAction('[Movies] Get Movies SUCCESS');
export const getMoviesFail = createAction('[Movies] Get Movies FAIL');
export const updateSearchTerm = createAction(
  '[Movies] Update Search Term',
  props<{ searchTerm: string }>()
);
export const reset = createAction('[Movies] Reset');
