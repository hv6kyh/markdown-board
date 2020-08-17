import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Header } from '../DTO/header.dto';
import { API_URL } from '../shared/constant/constant';
import { HeaderResponse } from './dto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  header: Header = null;

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<HeaderResponse>(API_URL + '/hello')
      .subscribe((resp: HeaderResponse) => {
        if (resp.status === 200 && resp.data) {
          this.header = resp.data;
        }
      });
  }
}
