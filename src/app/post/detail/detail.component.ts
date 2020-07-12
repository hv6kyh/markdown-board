import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostDetail } from './../../DTO/post-detail.dto';
import { PostService } from './../post.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  post: PostDetail = null;
  postId: number = null;

  constructor(
    private readonly postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postId = this.route.snapshot.params.post_id;

    this.postService
      .getPostDetail()
      .subscribe((resp) => (this.post = resp[this.postId - 1]));
  }
}
