import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from '@models/movie.model';
import { Store } from '@ngrx/store';
import AppState from '@store/app.state';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<MovieModel[]> = this.store.select(
    (state) => state.app.movies
  );
  moviesError: Error = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  selectMovieDetails(id): void {}
}
