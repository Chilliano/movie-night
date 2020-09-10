import { AppState } from './store/app-state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MoviesModel } from './store/models/movies.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  movies$: Observable<Array<MoviesModel>>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.movies$ = this.store.select((store) => store.movies);
  }
}
