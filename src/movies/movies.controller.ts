import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/moive.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() data) {
    return this.moviesService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.delete(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data) {
    return {
      updatedMovie: id,
      ...data,
    };
  }
}
