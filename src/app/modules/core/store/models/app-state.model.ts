import { MoviesModel } from './movies.model';

export class AppStateModel {
  constructor(
    public movies: MoviesModel[],
    public selectedMovie: MoviesModel,
    public selectedGenres: string[]
  ) {}
}
