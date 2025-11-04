import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../models/Post';
import { PostItem } from '../post-item/post-item';
import { Post as PostService } from '../services/post';

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

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    // Initialization logic can go here
    this.posts = this.postService.getPosts();
  }

  onHidePost(postToHide: Post): void {
    this.posts = this.posts.filter(post => post.id !== postToHide.id);
  }
}
