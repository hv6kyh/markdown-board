import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {
  createPostForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private readonly postService: PostService, private readonly location: Location) {
    this.createPostForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required])
    });
  }

  get f() { return this.createPostForm.controls; }

  ngOnInit(): void {
  }

  submit(e) {
    this.postService
      .createPost(e)
      .subscribe(resp => {
        alert('작성됨' + JSON.stringify(resp));
        this.location.back();
    });

  }


}
