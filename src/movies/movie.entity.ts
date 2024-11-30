import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  director: string;

  @Column({ nullable: true })
  releaseDate: string;

  @Column('text', { array: true, default: [] })
  characters: string[];
}
