import { Component, OnInit } from '@angular/core';

// color
import { Color } from '@assets/styles/_color';
// services
import { MoviesService, RouterService } from '@services/index';
// rxjs
import { Observable } from 'rxjs';
import { GenreTypes } from '@store/enums/genre.enum';
@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  displayList = false;
  color = new Color();
  chosenGenres$: Observable<string[]>;
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

  ngOnInit() {
    this.chosenGenres$ = this.moviesService.getSelectedGenres();
  }

  onFilterByGenre(genres) {
    const genreStrings = genres.map((genre) => genre.value);
    this.displayList = false;
    this.moviesService.updateSelectedGenres(genreStrings);
  }

  toggleList() {
    this.displayList = !this.displayList;
  }

  getRouteUrl(): string {
    return this.routerService.getRouter();
  }
}
