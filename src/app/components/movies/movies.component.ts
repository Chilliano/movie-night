import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MovieModel } from 'app/models/movie.model';
import { MoviesService } from 'app/services/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<MovieModel[]>;
  searchTerm$: Observable<string>;
  localSearchTermRef = '';
  rowHeight = '2:1';
  hideList = false;
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.resetList();
    this.searchTerm$ = this.movieService.getSearchTerm();
  }

  resetList(): void {
    this.movies$ = this.movieService.getAllMovies();
  }

  updateSearchTerm(e) {
    if (!e.target.value) {
      console.log('inside reset');
      this.resetList();
      this.movieService.updateSearchTerm('');
    } else {
      this.movieService.updateSearchTerm(e.target.value);
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
