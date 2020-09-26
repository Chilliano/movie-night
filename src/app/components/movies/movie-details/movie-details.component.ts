import { Component, OnInit } from '@angular/core';
import { MovieModel } from '@models/movie.model';
import { MoviesService } from '@services/movies/movies.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { appearFromLeftAnimation } from '@animations/appear-from-left.animation';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  animations: [appearFromLeftAnimation],
})
export class MovieDetailsComponent implements OnInit {
  items = [
    ` <div class="block">
  <div
    class="side -main"
    [ngStyle]="{
      'background-image': 'url(' + (selectedMovie$ | async)?.img + ')'
    }"
  ></div>
  <div
    class="side -left"
    [ngStyle]="{
      'background-image': 'url(' + (selectedMovie$ | async)?.img + ')'
    }"
  ></div>
</div>`,
    ` <div class="block">
    <div
      class="side -main"
      [ngStyle]="{
        'background-image': 'url(' + (selectedMovie$ | async)?.img + ')'
      }"
    ></div>
    <div
      class="side -left"
      [ngStyle]="{
        'background-image': 'url(' + (selectedMovie$ | async)?.img + ')'
      }"
    ></div>
  </div>`,
    ` <div class="block">
<div
  class="side -main"
  [ngStyle]="{
    'background-image': 'url(' + (selectedMovie$ | async)?.img + ')'
  }"
></div>
<div
  class="side -left"
  [ngStyle]="{
    'background-image': 'url(' + (selectedMovie$ | async)?.img + ')'
  }"
></div>
</div>`,
  ];
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
