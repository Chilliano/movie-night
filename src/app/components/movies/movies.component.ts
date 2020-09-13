import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from '@models/movie.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Array<MovieModel>>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): Observable<Array<MovieModel>> {
    return (this.movies$ = this.store.select((state) => {
      return state.app.movies;
    }));
  }

  selectMovieDetails(id): void {}
}
