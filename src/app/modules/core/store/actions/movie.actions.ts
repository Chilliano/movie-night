import { MovieModel } from '@models/movie.model';
import { createAction, props } from '@ngrx/store';

export const setAllMovies = createAction('[Movies] Set Movies');
export const getAllMovies = createAction('[Movies] Get Movies');
export const getOneMovie = createAction(
  '[Movies] Get ONE Movie',
  props<{ id: Number }>()
);
export const getMoviesSuccess = createAction('[Movies] Get Movies SUCCESS');
export const getMoviesFail = createAction('[Movies] Get Movies FAIL');
export const updateFilterTerm = createAction(
  '[Movies] Update Filter Term',
  props<{ filterTerm: string }>()
);
export const updateSelectedMovie = createAction(
  '[Movies] Update Movie Selected',
  props<{ selectedMovie: MovieModel }>()
);

export const updateGenresSelected = createAction(
  '[Movies] Update Genres Selected',
  props<{ selectedGenres: string[] }>()
);
export const reset = createAction('[Movies] Reset');
