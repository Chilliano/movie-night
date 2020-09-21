import { Component, OnInit } from '@angular/core';
import { MovieModel } from '@models/movie.model';
import { MoviesService } from '@services/movies/movies.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  selectedMovie$: Observable<MovieModel> | void;
  id: number;
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      const parsedId = (this.id = +params['id']);
      this.selectedMovie$ = this.movieService.getSelectedMovie(parsedId);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
