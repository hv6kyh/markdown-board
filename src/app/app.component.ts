import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { LoadingSpinnerService } from './loading/loading-spinner/loading-spinner.service';
import { PostService } from './post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'markdown-board';

  constructor(private readonly router: Router, private readonly loadingSpinnerService: LoadingSpinnerService, private readonly postService: PostService) {
    router.events.subscribe((event: RouterEvent) => {
      this.updateLoadingSpinner(event);
    });
  }

  private updateLoadingSpinner(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      console.log('navigation start');
      this.loadingSpinnerService.show();
    } else if (
      event instanceof NavigationEnd
      || event instanceof NavigationError
      || event instanceof NavigationCancel
    ) {
      console.log('navigation end');
      this.loadingSpinnerService.hide();
    }
  }
}
