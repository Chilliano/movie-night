import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../store/app-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MoviesModel } from '../../../store/models/movies.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Array<MoviesModel>>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.movies$ = this.store.select((store) => store.movies);
  }
}
