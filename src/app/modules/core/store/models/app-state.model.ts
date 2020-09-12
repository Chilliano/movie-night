import { MovieModel } from './movies.model';

export class AppStateModel {
  [x: string]: any;
  constructor(
    public movies: MovieModel[],
    public selectedMovie: MovieModel,
    public selectedGenres: string[]
  ) {}
}
