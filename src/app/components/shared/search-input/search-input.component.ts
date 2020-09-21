import { Component, OnInit } from '@angular/core';
import { MovieModel } from '@models/movie.model';
import { MoviesService } from '@services/movies/movies.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  movies$: Observable<MovieModel[]>;
  searchTerm$: Observable<string>;
  hideList = false;

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.searchTerm$ = this.movieService.getSearchTerm();
    this.movies$ = this.movieService.getAllMovies();
  }

  updateSearchTerm(e) {
    if (!e.target.value) {
      this.movieService.updateSearchTerm('');
    } else {
      this.movieService.updateSearchTerm(e.target.value);
    }
  }

  resetList(): void {
    this.movies$ = this.movieService.getAllMovies();
  }
}
