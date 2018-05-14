import { Component, OnInit } from '@angular/core';

import { Article } from '../../models/article';

import { RestApiService } from './../../services/rest-api.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private rest_api: RestApiService
  ) { }

  articles: Article[];

  ngOnInit() {

    this.rest_api.getAllArticles().subscribe(articles => {
      this.articles =articles;
    });

  }

}
