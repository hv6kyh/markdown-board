import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { GlobalNavigationComponent } from './global-navigation/global-navigation.component';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerOverlayComponent } from './loading/loading-spinner/loading-spinner-overlay.component';
import { LoadingSpinnerComponent } from './loading/loading-spinner/loading-spinner.component';
import { LoadingSpinnerService } from './loading/loading-spinner/loading-spinner.service';
import { PostModule } from './post/post.module';
import { MaterialModule } from './styles/material.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, GlobalNavigationComponent, LoadingSpinnerComponent, LoadingSpinnerOverlayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AuthModule
  ],
  providers: [
    LoadingSpinnerService
  ],
  entryComponents: [
    LoadingSpinnerComponent, LoadingSpinnerOverlayComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
