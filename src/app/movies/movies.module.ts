import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { GenreComponent } from './genre/genre.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    MoviesComponent
  ],
  declarations: [MoviesComponent, MovieComponent, GenreComponent]
})
export class MoviesModule { }
