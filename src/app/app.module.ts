import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MoviesModule } from './movies/movies.module';
import { DirectorsModule } from './directors/directors.module';

const routerModule = RouterModule.forRoot([]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routerModule,
    MoviesModule,
    DirectorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
