import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http
      .get('/api/movies.json')
      .map(rsp => rsp.json())
      .subscribe(movies => this.movies = movies);
  }

}
