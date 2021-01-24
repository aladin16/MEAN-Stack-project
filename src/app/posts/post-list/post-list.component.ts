import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Post } from '../post.model'
import { PostService } from '../post.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  //   posts = [
  //   { title: "First Post", content: "This is the first post's content" },
  //   { title: "Second Post", content: "This is the second post's content" },
  //   { title: "Third Post", content: "This is the third post's content" }
  // ];

  posts: Post[] = [];
  private postSubs:Subscription;
  constructor(public postService: PostService) {}

  ngOnInit() {
    this.posts=this.postService.getPost();
    this.postService.getPostsUpdatedList()
      .subscribe((posts:Post[])=>{
        this.posts=posts;
      });
  }

  ngOnDestroy() {
    this.postSubs.unsubscribe();
  }
}
