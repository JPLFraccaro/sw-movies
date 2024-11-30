import { Movie } from 'src/movies/movie.entity';

describe('Movie Entity', () => {
  it('should create a movie with correct properties', () => {
    const movie = new Movie();
    movie.title = 'A New Hope';
    movie.episodeId = 4;
    movie.openingCrawl =
      'It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\n...';
    movie.director = 'George Lucas';
    movie.producer = 'Gary Kurtz, Rick McCallum';
    movie.releaseDate = '1977-05-25';
    movie.characters = [
      'https://swapi.dev/api/people/1/',
      'https://swapi.dev/api/people/2/',
      'https://swapi.dev/api/people/3/',
    ];
    movie.planets = [
      'https://swapi.dev/api/planets/1/',
      'https://swapi.dev/api/planets/2/',
    ];
    movie.starships = [
      'https://swapi.dev/api/starships/2/',
      'https://swapi.dev/api/starships/3/',
    ];
    movie.vehicles = [
      'https://swapi.dev/api/vehicles/4/',
      'https://swapi.dev/api/vehicles/6/',
    ];
    movie.species = [
      'https://swapi.dev/api/species/1/',
      'https://swapi.dev/api/species/2/',
    ];
    movie.created = '2014-12-10T14:23:31.880000Z';
    movie.edited = '2014-12-20T19:49:45.256000Z';
    movie.url = 'https://swapi.dev/api/films/1/';

    expect(movie.title).toBe('A New Hope');
    expect(movie.episodeId).toBe(4);
    expect(movie.openingCrawl).toContain('It is a period of civil war.');
    expect(movie.director).toBe('George Lucas');
    expect(movie.producer).toBe('Gary Kurtz, Rick McCallum');
    expect(movie.releaseDate).toBe('1977-05-25');
    expect(movie.characters).toEqual([
      'https://swapi.dev/api/people/1/',
      'https://swapi.dev/api/people/2/',
      'https://swapi.dev/api/people/3/',
    ]);
    expect(movie.planets).toEqual([
      'https://swapi.dev/api/planets/1/',
      'https://swapi.dev/api/planets/2/',
    ]);
    expect(movie.starships).toEqual([
      'https://swapi.dev/api/starships/2/',
      'https://swapi.dev/api/starships/3/',
    ]);
    expect(movie.vehicles).toEqual([
      'https://swapi.dev/api/vehicles/4/',
      'https://swapi.dev/api/vehicles/6/',
    ]);
    expect(movie.species).toEqual([
      'https://swapi.dev/api/species/1/',
      'https://swapi.dev/api/species/2/',
    ]);
    expect(movie.created).toBe('2014-12-10T14:23:31.880000Z');
    expect(movie.edited).toBe('2014-12-20T19:49:45.256000Z');
    expect(movie.url).toBe('https://swapi.dev/api/films/1/');
  });
});
