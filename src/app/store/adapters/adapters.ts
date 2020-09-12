import { createEntityAdapter } from '@ngrx/entity';
import { MoviesData } from '../../store/movie.mock-data';

import { MoviesStateModel, FilterStateModel } from '../models/app-state.model';
import { MoviesModel } from '../models/movies.model';

const adapterMovies = createEntityAdapter<MoviesModel>();
const adapterFilterString = createEntityAdapter<string>();

export const moviesInitialState: MoviesStateModel = adapterMovies.getInitialState(
  {
    list: [...MoviesData],
  }
);

export const filterStringInitialState: FilterStateModel = adapterFilterString.getInitialState(
  {
    filterString: '',
  }
);
