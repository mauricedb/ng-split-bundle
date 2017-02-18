import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    MoviesComponent
  ],
  declarations: [MoviesComponent]
})
export class MoviesModule { }
