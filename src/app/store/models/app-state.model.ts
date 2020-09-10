import { MoviesModel } from './movies.model';

export interface AppStateModel {
  movies: MoviesModel[];
  selectedMovie: MoviesModel;
  selectedGenres: string[];
}
