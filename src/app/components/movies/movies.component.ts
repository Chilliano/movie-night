import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from '@models/movie.model';
import { select, Store } from '@ngrx/store';
import AppState from '@store/app.state';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Array<MovieModel>>;
  moviesError: Error = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): Observable<Array<MovieModel>> {
    return (this.movies$ = this.store.pipe(
      select((state: AppState) => {
        return state.app.movies;
      })
    ));
  }

  selectMovieDetails(id): void {}
}
