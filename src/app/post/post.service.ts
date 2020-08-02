import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostCreate } from '../DTO/post-create.dto';
import { API_URL } from '../shared/constant/constant';
import { PostDetail } from './../DTO/post-detail.dto';
import { PostList } from './../DTO/post-list.dto';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private readonly http: HttpClient) {}

  getPostList(): Observable<PostList[]> {
    return this.http.get<PostList[]>(API_URL + '/post');
  }

  getPostDetail(postId: string): Observable<PostDetail> {
    return this.http.get<PostDetail>(API_URL + `/post/${postId}`);
  }

  createPost(dto: PostCreate): Observable<PostDetail> {
    return this.http.post<PostDetail>(API_URL + '/post', {
      title: dto.title,
      author: dto.author,
      content: dto.content,
    });
  }
}
