import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './models/article.model';
import { Blog } from './models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  addBlog(blog: Blog){

  }

  addArticle(article: Article){

  }

  getallBlogs(): Observable<Blog[]>{
    return of([]);
  }
}
