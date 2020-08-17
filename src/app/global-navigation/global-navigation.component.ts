import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL } from '../shared/constant/constant';
import { Menu } from './../DTO/menu.dto';
import { MenuResponse } from './dto';

@Component({
  selector: 'app-global-navigation',
  templateUrl: './global-navigation.component.html',
  styleUrls: ['./global-navigation.component.scss'],
})
export class GlobalNavigationComponent implements OnInit {
  menus: Menu[] = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<MenuResponse>(API_URL + '/menu')
      .subscribe((resp: MenuResponse) => {
        if (resp.status === 200 && resp.data) {
          this.menus = resp.data;
        }
      });
  }
}
