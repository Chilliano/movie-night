import { MoviesData } from '@assets/movie.mock-data';
import { MovieModel } from '@store/models/movie.model';

export default class AppState {
  // below is to avoid model difference with app key
  [app: string]: any;
  constructor(
    public searchTerm: string,
    public movies: MovieModel[],
    public selectedMovie: MovieModel,
    public selectedGenres: string[]
  ) {}
}

export const initializeState = (): AppState => {
  return {
    searchTerm: '',
    movies: [...MoviesData],
    selectedMovie: null,
    selectedGenres: [],
  };
};
