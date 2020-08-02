// material.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; // o
import { MatCardModule } from '@angular/material/card'; // o
import { MatDialogModule } from '@angular/material/dialog'; // o
import { MatIconModule } from '@angular/material/icon'; // o
import { MatInputModule } from '@angular/material/input'; // o
import { MatListModule } from '@angular/material/list'; // o
import { MatSidenavModule } from '@angular/material/sidenav'; // o
import { MatSliderModule } from '@angular/material/slider'; // o
import { MatTableModule } from '@angular/material/table'; // o
import { MatToolbarModule } from '@angular/material/toolbar'; // o



@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatSliderModule
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatSliderModule
  ],
  declarations: []
})
export class MaterialModule { }
