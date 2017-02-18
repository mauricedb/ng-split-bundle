import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DirectorsComponent } from './directors/directors.component';

const routes: Routes = [
  { path: 'directors', component: DirectorsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[DirectorsComponent],
  declarations: [DirectorsComponent]
})
export class DirectorsModule { }
