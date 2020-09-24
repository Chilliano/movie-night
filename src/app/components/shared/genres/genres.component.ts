import { Component, OnInit } from '@angular/core';
import { Color } from '@assets/styles/_color';
import { MoviesService } from '@services/movies/movies.service';

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

  constructor(private moviesService: MoviesService) {}

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
}
