import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostDetailResponse } from '../dto';
import { PostDetail } from './../../DTO/post-detail.dto';
import { PostService } from './../post.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public router: Router = null;
  post: PostDetail = null;
  postId: string = null;

  constructor(
    private readonly postService: PostService,
    private route: ActivatedRoute,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    this.router = this.injector.get(Router);

    this.postId = this.route.snapshot.params.post_id;

    this.postService
      .getPostDetail(this.postId)
      .subscribe((resp: PostDetailResponse) => {
        if (resp.status === 200 && resp.data) {
          this.post = resp.data;
        }
      });
  }
}
