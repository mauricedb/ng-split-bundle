import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { GenreComponent } from './genre/genre.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    MoviesComponent
  ],
  declarations: [MoviesComponent, MovieComponent, GenreComponent]
})
export class MoviesModule { }
