import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostList } from './../../DTO/post-list.dto';
import { PostService } from './../post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public router: Router = null;
  list: PostList[] = [];

  constructor(
    private readonly postService: PostService,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    this.router = this.injector.get(Router);
    this.postService.getPostList().subscribe((resp) => (this.list = resp));

    return;
  }

  goToDetail(post: PostList): void {
    this.router.navigate(['./', post.post_id]);
    // console.log('post: ', post);
    // console.log('id: ', post.post_id);
    // console.log('title: ', post.title);
    // console.log('reg_dt: ', post.reg_dt);
    // console.log('author: ', post.author);
    return;
  }
}
