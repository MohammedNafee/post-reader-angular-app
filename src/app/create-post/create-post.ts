import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../models/Post';


@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-post.html',
  styleUrl: './create-post.css',
})
export class CreatePost {
  // Form fields
  // Two-way binding will update these properties
  title = '';
  body = '';

  // Event emitter to notify parent component of new post creation
  @Output() postCreated = new EventEmitter<Post>();
  
  // Method to handle form submission
  onSubmit(): void {
    const newPost: Post = {
      id: Date.now(), // Generate a unique ID using timestamp
      title: this.title,
      body: this.body,
      votes: 1, // Default votes
    };

    // Emit the new post to the parent component
    this.postCreated.emit(newPost);

    // Reset form fields
    this.title = '';
    this.body = '';
  }
}
