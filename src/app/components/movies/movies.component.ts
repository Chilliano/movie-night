import { Component, OnInit } from '@angular/core';
// rxjs
import { Observable } from 'rxjs';
// models
import { MovieModel } from 'app/models/movie.model';
// services
import { MoviesService } from 'app/services/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  // selectors
  movies$: Observable<MovieModel[]>;
  selectedGenres$: Observable<string[]>;
  filterTerm$: Observable<string>;

  localFilterTermRef = '';
  rowHeight = '2:1';
  hideList = false;

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.resetList();
    this.filterTerm$ = this.movieService.getFilterTerm();
    this.selectedGenres$ = this.movieService.getSelectedGenres();
  }

  resetList(): void {
    this.movies$ = this.movieService.getAllMovies();
  }

  updateFilterTerm(e) {
    if (!e.target.value) {
      this.resetList();
      this.movieService.updateFilterTerm('');
    } else {
      this.movieService.updateFilterTerm(e.target.value);
    }
  }

  onListItemSelect(item: MovieModel) {
    if (item) {
      this.selectMovie(item);
    }
  }

  selectMovie(movie) {
    this.movieService.selectMovie(movie);
  }
}
