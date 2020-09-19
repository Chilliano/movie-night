import { MovieModel } from 'app/models/movie.model';
import { Pipe, PipeTransform } from '@angular/core';
import { parseString } from '../functions/parse-string.function';

@Pipe({
  name: 'filterOnSearchTerm',
})
export class FilterOnSearchTermPipe implements PipeTransform {
  transform(list: MovieModel[], searchTerm: string) {
    return searchTerm.length
      ? list.filter((item) => {
          const includedInItem = {
            isIncluded: function () {
              let pName = parseString(this.name);
              let pDescription = parseString(this.description);
              let pGenres = parseString(
                this.genres.map((genre) => parseString(genre)).join()
              );

              let pSearchTerm = parseString(searchTerm);

              const res =
                pName.includes(pSearchTerm) ||
                pDescription.includes(pSearchTerm) ||
                pGenres.includes(pSearchTerm);

              return res ? true : false;
            },
          };
          return includedInItem.isIncluded.apply(item) ? item : false;
        })
      : list;
  }
}
