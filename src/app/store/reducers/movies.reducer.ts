import { MoviesModel } from '../models/movies.model';
import { MoviesData } from '../../store/movie.mock-data';
import { MoviesAction } from '../actions/movies.action';
import { MoviesActionTypes } from '../types/movies.types';

const initialState: Array<MoviesModel> = [...MoviesData];

export function MoviesReducer(
  state: Array<MoviesModel> = initialState,
  action: MoviesAction
) {
  const { type, payload } = action;

  switch (type) {
    case MoviesActionTypes.GET_MOVIES:
      return [...state];
    case MoviesActionTypes.GET_MOVIE_DETAILS:
      const match = initialState.filter((movie) => movie.id === payload);
      return [...match];
    default:
      return state;
  }
}
