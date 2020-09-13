import { MovieModel } from '@models/movie.model';
import { createAction, props } from '@ngrx/store';
export const GetAllMoviesAction = createAction('[MOVIES] - Get All Movies');

export const GetMovieDetailsAction = createAction(
  '[MOVIES] - Get Movie Details'
);
export const BeginGetMovieDetailsAction = createAction(
  '[MOVIES] - Begin Get Movie Details'
);
export const SuccessGetMovieDetailsAction = createAction(
  '[MOVIES] - Success Get Movie Details',
  props<{ payload: MovieModel }>()
);
export const ErrorGetMovieDetailsAction = createAction(
  '[MOVIES] - Error',
  props<Error>()
);
