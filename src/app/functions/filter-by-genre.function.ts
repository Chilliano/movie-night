import { MovieModel } from '@models/movie.model';

export const filterByGenre = (list: MovieModel[], genres: string[]) => {
  if (list.length && genres.length) {
    const included = [];
    list.forEach((item) => {
      genres.forEach((genre) => {
        if (item.genres.indexOf(genre) > -1 && included.indexOf(item) === -1) {
          included.push(item);
        }
      });
    });
    return included;
  } else {
    return null;
  }
};
