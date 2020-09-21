import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from 'app/models/movie.model';
import { MoviesService } from 'app/services/movies.service';

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
    this.movies$ = this.movieService.getAllMovies();
    this.searchTerm$ = this.movieService.getSearchTerm();
  }

  updateSearchTerm(e) {
    this.movieService.updateSearchTerm(e.target.value);
  }
}
