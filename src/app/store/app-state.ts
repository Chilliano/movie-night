import { MoviesModel } from './models/movies.model';

export interface AppState {
  readonly movies: Array<MoviesModel>;
}
