import { Component, OnInit } from '@angular/core';
// import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MoviesModel } from '@models/movies.model';
// import { GetMovieDetails } from 'app/store/actions/movies.action';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Array<MoviesModel>>;

  constructor() {}

  ngOnInit(): void {
    // this.movies$ = this.store.select((store) => store.movies);
  }

  selectMovieDetails(id): void {
    // this.store.dispatch(new GetMovieDetails(id));
  }
}
