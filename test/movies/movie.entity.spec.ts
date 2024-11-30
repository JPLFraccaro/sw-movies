import { Movie } from 'src/movies/movie.entity';

describe('Movie Entity', () => {
  it('should create a movie with empty characters array', () => {
    const movie = new Movie();
    movie.title = 'A New Hope';
    movie.director = 'George Lucas';
    movie.releaseDate = '1977-05-25';

    expect(movie.characters).toEqual([]);
  });
});
