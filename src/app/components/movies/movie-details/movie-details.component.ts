import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// models
import { MovieModel } from '@models/movie.model';
// services
import { MoviesService, RouterService } from '@services/index';
// rxjs
import { Observable } from 'rxjs';
// animations
import { appearFromLeftAnimation } from '@animations/appear-from-left.animation';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  animations: [appearFromLeftAnimation],
})
export class MovieDetailsComponent implements OnInit {
  // to create filling effect
  progressValue = 0;
  selectedMovie$: Observable<MovieModel>;
  id: number;
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService,
    private routerService: RouterService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      const parsedId = (this.id = +params['id']);
      this.selectedMovie$ = this.movieService.getSelectedMovie(parsedId);
      setTimeout(() => {
        this.updateProgressValue();
      }, 500);
    });
  }

  onChipSelect(genre) {
    this.routerService.goHome();
    this.movieService.resetSearch();
    this.movieService.updateSelectedGenres([genre]);
  }

  updateProgressValue() {
    this.selectedMovie$.subscribe((movie) => {
      this.progressValue = parseInt(movie.rate) * 10;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
