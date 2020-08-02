import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { MaterialModule } from '../styles/material.module';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { PostRoutingModule } from './post-routing.module';
import { WriteComponent } from './write/write.component';

@NgModule({
  declarations: [ListComponent, DetailComponent, WriteComponent],
  imports: [CommonModule, PostRoutingModule, MarkdownModule.forChild(), ReactiveFormsModule, MaterialModule],
  exports: [RouterModule],
})
export class PostModule {}
