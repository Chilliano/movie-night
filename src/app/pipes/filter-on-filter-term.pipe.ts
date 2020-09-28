import { Pipe, PipeTransform } from '@angular/core';
import { parseString } from '@functions/parse-string.function';
import { MovieModel } from '@models/movie.model';

@Pipe({
  name: 'filterOnFilterTerm',
})
export class FilterOnFilterTermPipe implements PipeTransform {
  transform(list: MovieModel[], filterTerm: string) {
    return filterTerm.length
      ? list.filter((item) => {
          const includedInItem = {
            isIncluded: function () {
              let pName = parseString(this.name);
              let pDescription = parseString(this.description);
              let pGenres = parseString(
                this.genres.map((genre) => parseString(genre)).join()
              );

              let pFilterTerm = parseString(filterTerm);

              const res =
                pName.includes(pFilterTerm) ||
                pDescription.includes(pFilterTerm) ||
                pGenres.includes(pFilterTerm);

              return res ? true : false;
            },
          };
          return includedInItem.isIncluded.apply(item) ? item : false;
        })
      : list;
  }
}
