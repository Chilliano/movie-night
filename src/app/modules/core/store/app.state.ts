import { MoviesData } from '@assets/movie.mock-data';
import { MovieModel } from '@models/movie.model';

export default class AppState {
  constructor(
    public filterTerm: string,
    public movies: MovieModel[],
    public selectedMovie: MovieModel,
    public selectedGenres: string[],
    public listDisplayGenres: boolean,
    public listDisplayFilterTerm: boolean
  ) {}
}

export const initializeState = (): AppState => {
  return {
    filterTerm: '',
    movies: [...MoviesData],
    selectedMovie: null,
    selectedGenres: [],
    listDisplayGenres: false,
    listDisplayFilterTerm: false,
  };
};
