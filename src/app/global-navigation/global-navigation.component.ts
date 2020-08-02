import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_URL } from '../shared/constant/constant';
import { Menu } from './../DTO/menu.dto';

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
      .get<Menu[]>(API_URL + '/user/menu')
      .subscribe((menus) => (this.menus = menus));
  }


}
