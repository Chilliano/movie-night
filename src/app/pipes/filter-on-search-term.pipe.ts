import { MovieModel } from '@store/models/movie.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOnSearchTerm',
})
export class FilterOnSearchTermPipe implements PipeTransform {
  transform(list: MovieModel[], searchTerm: string) {
    return searchTerm.length
      ? list.filter((item) => {
          const nameIncludes = item.name
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase());
          const descriptionIncludes = item.description
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase());
          const genresIncludes = item.genres
            .map((genre) => genre.toLocaleLowerCase())
            .includes(searchTerm.toLocaleLowerCase());
          const rateIncludes = item.rate
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase());

          return nameIncludes ||
            descriptionIncludes ||
            genresIncludes ||
            rateIncludes
            ? item
            : null;
        })
      : list;
  }
}
