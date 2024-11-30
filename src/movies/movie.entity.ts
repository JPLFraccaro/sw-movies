import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  episodeId: number;

  @Column('text')
  openingCrawl: string;

  @Column()
  director: string;

  @Column()
  producer: string;

  @Column()
  releaseDate: string;

  @Column('text', { array: true, default: [] })
  characters: string[];

  @Column('text', { array: true, default: [] })
  planets: string[];

  @Column('text', { array: true, default: [] })
  starships: string[];

  @Column('text', { array: true, default: [] })
  vehicles: string[];

  @Column('text', { array: true, default: [] })
  species: string[];

  @Column()
  created: string;

  @Column()
  edited: string;

  @Column()
  url: string;
}
