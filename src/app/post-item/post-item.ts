import { Component, OnInit, Input } from '@angular/core';
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
}
