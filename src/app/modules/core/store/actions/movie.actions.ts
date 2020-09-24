import { MovieModel } from '@models/movie.model';
import { createAction, props } from '@ngrx/store';
import * as movieTypes from '../movie.types';

// actions
export const setAllMovies = createAction(movieTypes.SET_MOVIES);
export const getAllMovies = createAction(movieTypes.GET_MOVIES);
export const getOneMovie = createAction(
  movieTypes.GET_ONE_MOVIE,
  props<{ id: Number }>()
);
export const updateFilterTerm = createAction(
  movieTypes.UPDATE_FILTER_TERM,
  props<{ filterTerm: string }>()
);
export const updateSelectedMovie = createAction(
  movieTypes.UPDATE_SELECTED_MOVIE,
  props<{ selectedMovie: MovieModel }>()
);
export const updateGenresSelected = createAction(
  movieTypes.UPDATE_SELECTED_GENRES,
  props<{ selectedGenres: string[] }>()
);
export const reset = createAction(movieTypes.RESET_MOVIES);
