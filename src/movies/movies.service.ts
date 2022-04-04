import { Injectable } from '@nestjs/common';
import { Movie } from './entities/moive.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id);
  }

  delete(id: string): Movie[] {
    this.movies = this.movies.filter((movie) => movie.id !== +id);
    return this.movies;
  }

  create(data) {
    this.movies.push({
      id: this.movies.length + 1,
      ...data,
    });
  }
}
