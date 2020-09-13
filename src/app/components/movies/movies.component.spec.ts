import { provideMockStore } from '@ngrx/store/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MoviesData } from '@assets/movie.mock-data';
import { FilterOnSearchTermPipe } from 'app/pipes/filter-on-search-term.pipe';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    const initialState = {
      searchTerm: '',
      movies: [...MoviesData],
      selectedMovie: null,
      selectedGenres: [],
    };

    TestBed.configureTestingModule({
      declarations: [MoviesComponent, FilterOnSearchTermPipe],
      providers: [provideMockStore({ initialState })],
      schemas: [NO_ERRORS_SCHEMA],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
