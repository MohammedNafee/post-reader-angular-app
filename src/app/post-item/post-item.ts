import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../models/Post';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-item.html',
  styleUrls: ['./post-item.css'],
})
export class PostItem implements OnInit {
  @Input() post: Post;

  // Event emitter to notify parent component to hide the post
  @Output() hidePost: EventEmitter<Post> = new EventEmitter();
  
  constructor() {
    this.post = { 
      id: 0, 
      title: '', 
      body: '', 
      votes: 0 
    };
  }

  ngOnInit(): void {
    // Initialization logic here
  }

  upvotePost(post: Post): void {
    post.votes += 1;
  }

  downvotePost(post: Post): void {
    post.votes -= 1;
  }

  hide(post: Post): void {
    // Emit the hidePost event with the post to be hidden
    this.hidePost.emit(post);
  }
}
