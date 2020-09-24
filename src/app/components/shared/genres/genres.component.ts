import { Component, OnInit } from '@angular/core';
import { Color } from '@assets/styles/_color';
import { MoviesService } from '@services/movies/movies.service';
import { RouterService } from '@services/router/router.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  displayList = false;
  color = new Color();
  genres = [
    'action',
    'adventure',
    'biography',
    'comedy',
    'crime',
    'drama',
    'history',
    'mystery',
    'scifi',
    'sport',
  ];

  constructor(
    private moviesService: MoviesService,
    private routerService: RouterService
  ) {}

  ngOnInit() {}

  onFilterByGenre(genres) {
    const genreStrings = genres.map((genre) => genre.value);
    this.displayList = false;
    this.moviesService.updateSelectedGenres(genreStrings);
  }

  toggleList() {
    this.displayList = !this.displayList;
    this.moviesService.resetSearch();
  }

  getRouteUrl(): string {
    console.log(
      'HeaderComponent -> getRouteUrl -> this.routerService.getRouter();',
      this.routerService.getRouter()
    );
    return this.routerService.getRouter();
  }
}
