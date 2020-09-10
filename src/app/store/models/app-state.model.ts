import { MoviesModel } from './movies.model';

export interface AppStateModel {
  allMovies: MoviesModel[];
  selectedMovie: MoviesModel;
  selectedGenres: string[];
}
