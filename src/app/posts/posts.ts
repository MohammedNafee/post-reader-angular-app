import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../models/Post';
import { PostItem } from '../post-item/post-item';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, PostItem],
  templateUrl: './posts.html',
  styleUrls: ['./posts.css'],
})
export class Posts implements OnInit {
  title: string = 'Posts Component';
  posts: Post[] = [];

  constructor() {}

  ngOnInit(): void {
    // Initialization logic can go here
    this.posts = [
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
