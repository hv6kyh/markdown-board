import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Header } from '../DTO/header.dto';

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
      .get<Header>('./../../assets/mock-header.json')
      .subscribe((resp) => (this.header = resp));
  }
}
