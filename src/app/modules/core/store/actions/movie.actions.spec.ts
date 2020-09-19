import { MoviesData } from '@assets/movie.mock-data';
import * as actions from './movie.actions';

describe('actions', () => {
  it('should retrieve all Movies', () => {
    const expectedAction = {
      type: actions.getAllMovies.type,
    };
    expect(actions.getAllMovies().type).toBe(expectedAction.type);
  });
});
