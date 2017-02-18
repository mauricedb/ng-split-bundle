import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent implements OnInit {
  directors = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http
      .get('/api/directors.json')
      .map(rsp => rsp.json())
      .subscribe(directors => this.directors = directors);
  }

}
