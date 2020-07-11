import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { WriteComponent } from './write/write.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: ':id',
    component: DetailComponent,
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  declarations: [ListComponent, DetailComponent, WriteComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PostModule {}
