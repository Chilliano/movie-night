import { MovieModel } from './../modules/core/store/models/movie.model';
import { FilterOnSearchTermPipe } from './filter-on-search-term.pipe';

describe('PhonenumberPipe', () => {
  let pipe: FilterOnSearchTermPipe;
  let arrayList: MovieModel[];
  let searchString: string;

  beforeEach(() => {
    pipe = new FilterOnSearchTermPipe();
    searchString = 'ROYALE';
    arrayList = [
      {
        id: 21,
        key: 'the-tournament',
        name: 'The Tournament',
        description:
          "Every seven years in an unsuspecting town, The Tournament takes place. A battle royale between 30 of the world's deadliest assassins. The last man standing receiving the $10,000,000 cash prize and the title of Worlds No 1, which itself carries the legendary million dollar a bullet price tag.",
        genres: ['action', 'thriller'],
        rate: '6.1',
        length: '1hr 35mins',
        img: 'the-tournament.jpg',
      },
      {
        id: 22,
        key: 'the-matrix',
        name: 'The Matrix',
        description:
          'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        genres: ['action', 'scifi'],
        rate: '8.7',
        length: '2hr 16mins',
        img: 'the-matrix.jpg',
      },
    ];
  });

  it('creates an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter out any object without the searchString found in name,description or genres', () => {
    const pipe = new FilterOnSearchTermPipe();
    const result = pipe.transform(arrayList, searchString);

    expect(result).toEqual([
      {
        id: 21,
        key: 'the-tournament',
        name: 'The Tournament',
        description:
          "Every seven years in an unsuspecting town, The Tournament takes place. A battle royale between 30 of the world's deadliest assassins. The last man standing receiving the $10,000,000 cash prize and the title of Worlds No 1, which itself carries the legendary million dollar a bullet price tag.",
        genres: ['action', 'thriller'],
        rate: '6.1',
        length: '1hr 35mins',
        img: 'the-tournament.jpg',
      },
    ]);
  });
});
