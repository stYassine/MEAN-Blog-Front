import { Component, OnInit } from '@angular/core';

import { Article } from '../../models/article';

import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../../services/rest-api.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private rest_api: RestApiService,
    private auth_service: AuthService
  ) { }

  article: Article;
  comments: Comment[];
  new_comment: Comment;
  user_authenticated: Boolean =false;
  authenticated_user;


  ngOnInit() {

    let article_id =this.route.snapshot.params['id'];

    /// get article by id
    this.rest_api.getSingleArticle(article_id).subscribe(response => {
      this.article =response.article;
      this.comments =response.comments;
    });

    /// get article comments
    // this.rest_api.getCommentsByArticleId(article_id).subscribe(comments => {
    //   this.comments =comments;
    // });
    this.user_authenticated= this.auth_service.isUsedLoggedIn();
    this.authenticated_user = this.auth_service.getTokenAndUser();

  }

  createComment(value){
    
    /// create comments
    let comment ={
      user_id: this.authenticated_user._id,
      article_id: this.article._id,
      body: value.body,
    };

    this.rest_api.createComment(comment).subscribe(response => {
      console.log(response);
    });


  }


  /// like a comment
  likeAcomment(comment_id){

    console.log(comment_id);

    // user_id
    // comment_id
    let like ={
      user_id: this.authenticated_user._id,
      comment_id: comment_id
    };

    this.rest_api.likeAComment(like).subscribe(response => {
      console.log(response);
    });


  }
  
  /// dislike a comment
  dislikeAcomment(){


    // this.rest_api.dislikeAComment().subscribe(response => {

    // });

  }




  

}
