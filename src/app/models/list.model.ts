import { MovieModel } from './movie.model';

export interface ListConfigModel {
  data: MovieModel[] | string[];
  hide: Boolean;
  filterTerm: string;
}
