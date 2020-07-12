import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDetail } from './../DTO/post-detail.dto';
import { PostList } from './../DTO/post-list.dto';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private readonly http: HttpClient) {}

  getPostList(): Observable<PostList[]> {
    return this.http.get<PostList[]>('./../../assets/mock-post-lists.json');
  }

  getPostDetail(): Observable<PostDetail[]> {
    return this.http.get<PostDetail[]>('./../../assets/mock-post-details.json');
  }
}
