import { Injectable } from '@angular/core';
import { Post as PostModel } from '../models/Post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Post {

  constructor(private http: HttpClient) { }

  // Simulated method to fetch posts
  // In a real application, this might make an HTTP request to a backend service
  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
