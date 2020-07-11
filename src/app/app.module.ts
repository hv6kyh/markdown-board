import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalNavigationComponent } from './global-navigation/global-navigation.component';
import { HeaderComponent } from './header/header.component';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, GlobalNavigationComponent],
  imports: [BrowserModule, AppRoutingModule, PostModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
