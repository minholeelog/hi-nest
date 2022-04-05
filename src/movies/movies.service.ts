import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/moive.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID: ${id} not found.`);
    }
    return movie;
  }

  delete(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  create(data) {
    this.movies.push({
      id: this.movies.length + 1,
      ...data,
    });
  }

  update(id: string, data) {
    const movie = this.getOne(id);
    this.delete(id);
    this.movies.push({ ...movie, ...data });
  }
}
