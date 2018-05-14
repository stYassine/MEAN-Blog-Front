import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../models/user';
import { Article } from '../../models/article';
import { Comment } from '../../models/comment';

import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private rest_api: RestApiService,
    private route: ActivatedRoute
  ) { }

  user: User;
  articles: Article[];
  comments: Comment[];

  ngOnInit() {

    let user_id =this.route.snapshot.params['id'];

    this.rest_api.getSingleUser(user_id).subscribe(response => {
      this.user =response.user;
      this.articles =response.articles;
      this.comments =response.comments;
    });

  }

}
