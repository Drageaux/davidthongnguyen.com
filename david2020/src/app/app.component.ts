import { environment } from './../environments/environment';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { distinctUntilChanged } from 'rxjs/operators';

// Declare ga as ambient
declare var ga;
declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  particleNum = 50;

  // dev vs prod
  name = environment.production ? 'David Thong Nguyen' : 'Lorem Ipsum Name';
  title = environment.production ? 'Software Engineer' : 'Lorem Ipsum Title';
  coverPhotoSpecs = {
    widthList: [400, 600, 800],
    sizes: '(max-width: 992px) 90vw, 33vw'
  };

  constructor(private router: Router) {
    $('body').scrollspy({ target: '', offset: 100 });
    this.router.events
      .pipe(
        distinctUntilChanged((previous: any, current: any) => {
          // Subscribe to any `NavigationEnd` events where the url has changed
          if (current instanceof NavigationEnd) {
            return previous.url === current.url;
          }
          return true;
        })
      )
      .subscribe((x: any) => {
        console.log(x.url);
        ga('set', 'page', x.url);
        ga('send', 'pageview');
      });

    $(window).on('activate.bs.scrollspy', function(e) {
      console.log(e.target);

      history.replaceState({}, '', $('.nav-item .active').attr('href'));
    });
  }
}
