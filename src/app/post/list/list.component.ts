import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostListResponse } from '../dto';
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
  displayedColumns = ['post_id', 'title', 'author', 'reg_dt', 'mod_dt'];

  constructor(
    private readonly postService: PostService,
    private injector: Injector,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router = this.injector.get(Router);
    this.postService.getPostList()
      .subscribe((resp: PostListResponse) => {
        if (resp.status === 200 && resp.data) {
          this.list = resp.data;
        }
      });

    return;
  }

  goToDetail(post: PostList): void {
    this.router.navigate(['../', post.post_id], { relativeTo: this.route });
    // console.log('post: ', post);
    // console.log('id: ', post.post_id);
    // console.log('title: ', post.title);
    // console.log('reg_dt: ', post.reg_dt);
    // console.log('author: ', post.author);
    return;
  }

  goToWrite(): void {
    this.router.navigate(['../write'], { relativeTo: this.route });
    return;
  }
}
