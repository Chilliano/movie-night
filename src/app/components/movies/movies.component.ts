import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from '@models/movie.model';
import { MoviesService } from 'app/services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<MovieModel[]>;
  moviesError: Error = null;
  searchTerm$: Observable<string>;
  localSearchTermRef = '';

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movies$ = this.movieService.getAllMovies();
    this.searchTerm$ = this.movieService.getSearchTerm();
  }

  updateSearchTerm(e) {
    this.movieService.updateSearchTerm(e.target.value);
  }
}
