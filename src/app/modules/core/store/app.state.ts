import { MoviesData } from '@assets/movie.mock-data';
import { MovieModel } from '@store/models/movie.model';

export default class AppState {
  [x: string]: any;
  constructor(
    public movies: MovieModel[],
    public selectedMovie: MovieModel,
    public selectedGenres: string[]
  ) {}
}

export const initializeState = (): AppState => {
  return {
    movies: [...MoviesData],
    selectedMovie: null,
    selectedGenres: [],
  };
};
