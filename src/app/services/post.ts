import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Post {

  constructor() { }

  // Simulated method to fetch posts
  // In a real application, this might make an HTTP request to a backend service
  getPosts() {
    return [
      { 
        id: 1, 
        title: 'First Post', 
        body: 'This is the first post.',
        votes: 0
      },
      {
        id: 2,
        title: 'Second Post',
        body: 'This is the second post.',
        votes: 0
      },
      {
        id: 3,
        title: 'Third Post',
        body: 'This is the third post.',
        votes: 0
      }
    ];
  }

}
