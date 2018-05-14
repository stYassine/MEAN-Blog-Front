import { Injectable } from '@angular/core';

import { Article } from './../models/article';
import { Category } from './../models/category';
import { User } from './../models/user';
import { Like } from '../models/like';


import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';


@Injectable()
export class RestApiService {

  constructor(
    private http: Http
  ) { }

  BASE_URL ="http://localhost:8080/";


  /// create source
  private createdArticleSource =new Subject<Article>();
  private deletedArticleSource =new Subject();

  /// stream
  createdArticle$ =this.createdArticleSource.asObservable();
  deletedArticle$ =this.deletedArticleSource.asObservable();

  ////////////////////////////////////////////////////////////
  /// Articles
  ////////////////////////////////////////////////////////////

  /// get all articles
  getAllArticles(): Observable<Article[]>{
    return this.http.get(this.BASE_URL+`articles`)
          .map(response => response.json())
          .catch(this.handleError);
  }

  /// get single articles
  getSingleArticle(article_id): Observable<any>{
    return this.http.get(this.BASE_URL+`articles/${article_id}`)
          .map(response => response.json())
          .catch(this.handleError);
  }

  /// get articles by category
  getArticlesByCategoryId(article_id): Observable<Article[]>{
    return this.http.get(this.BASE_URL+`articles/category/${article_id}`)
          .map(response => response.json())
          .catch(this.handleError);
  }
  
  /// get articles user id
  getArticlesByUserId(user_id): Observable<Article[]>{
    return this.http.get(this.BASE_URL+`articles/user/${user_id}`)
          .map(response => response.json())
          .catch(this.handleError);
  }



  /// create articles
  createArticle(article: Article): Observable<Article>{
    return this.http.get(this.BASE_URL+`/articles`, article)
          .map(response => response.json())
          .catch(this.handleError);
  }

  /// update articles
  updateArticle(article: Article): Observable<Article>{
    return this.http.get(this.BASE_URL+`/articles/update/${article._id}`, article)
          .map(response => response.json())
          .catch(this.handleError);
  }

  /// remove articles
  removeArticle(article_id): Observable<Article>{
    return this.http.get(this.BASE_URL+`/articles/remove/${article_id}`)
          .map(response => response.json())
          .catch(this.handleError);
  }

  /// article created
  articleCreated(article: Article){
    this.createdArticleSource.next(article);
  }

  /// article created
  articleDeleted(article: Article){
    this.deletedArticleSource.next(article);
  }

  ////////////////////////////////////////////////////////////
  /// Comments
  ////////////////////////////////////////////////////////////
  
  /// get all comments by article id
  getCommentsByArticleId(article_id): Observable<Comment[]>{
    return this.http.get(this.BASE_URL+`comments/article/${article_id}`)
          .map(response => response.json())
          .catch(this.handleError);
  }

  /// create comment
  createComment(comment: any): Observable<any>{
    return this.http.post(this.BASE_URL+`comments`, comment)
          .map(response => response.json())
          .catch(this.handleError);
  }


  ////////////////////////////////////////////////////////////
  /// Likes
  ////////////////////////////////////////////////////////////


  /// like a comment
  likeAComment(like: Like): Observable<Like>{
    return this.http.post(this.BASE_URL+`/like`, like)
            .map(response => response.json())
            .catch(this.handleError);
  }

  /// dislike a comment
  dislikeAComment(comment_id): Observable<Like>{
    return this.http.delete(this.BASE_URL+`/dislike/${comment_id}`)
            .map(response => response.json())
            .catch(this.handleError);
  }


  


  ////////////////////////////////////////////////////////////
  /// Categories
  ////////////////////////////////////////////////////////////
  
  /// get all categories
  getAllCategories(): Observable<Category[]>{
    return this.http.get(this.BASE_URL+'categories')
          .map(response => response.json())
          .catch(this.handleError);
  }

  /// create category
  createCategory(){}


  ////////////////////////////////////////////////////////////
  /// Users
  ////////////////////////////////////////////////////////////

  /// get all users
  getAllUsers(): Observable<User[]>{
    return this.http.get(this.BASE_URL+`users`)
          .map(response => response.json())
          .catch(this.handleError);
  }

  /// get single users
  getSingleUser(user_id): Observable<any>{
    return this.http.get(this.BASE_URL+`users/${user_id}`)
          .map(response => response.json())
          .catch(this.handleError);
  }

  /// create user
  createUser(user: User): Observable<User>{
    return this.http.post(this.BASE_URL+`users`, user)
          .map(response => response.json())
          .catch(this.handleError);
  }


  
  /// handle error
  handleError(response: Response){
    let err_message =`${response.status} - ${response.statusText}`;
    return Observable.throw(err_message);
  }




}
