import { MovieModel } from './../models/movie.model';

export const filterByGenre = (list: MovieModel[], genres: string[]) => {
  if (list.length && genres.length) {
    console.log('filterByGenre -> genres', genres);
    console.log('filterByGenre -> list', list);
    const included = [];
    list.forEach((item) => {
      genres.forEach((genre) => {
        if (item.genres.indexOf(genre) > -1 && included.indexOf(item) === -1) {
          included.push(item);
        }
      });
      console.log('filterByGenre -> included', included);
    });
    return included;
  } else {
    return null;
  }
};
