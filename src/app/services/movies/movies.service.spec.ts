import { initialState } from '../../modules/core/store/appReducer';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MoviesService } from '@services/movies/movies.service';

describe('MoviesService', () => {
  let service: MoviesService;
  let mockStore: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesService, provideMockStore({ initialState })],
    });
  });

  it('should be created', () => {
    service = TestBed.inject(MoviesService);
    expect(service).toBeTruthy();
  });
});
