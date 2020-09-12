import { MoviesData } from '@assets/movie.mock-data';
import { AppStateModel } from '@models/app-state.model';

export const initialAppState: AppStateModel = {
  movies: [...MoviesData],
  selectedMovie: null,
  selectedGenres: [],
};
