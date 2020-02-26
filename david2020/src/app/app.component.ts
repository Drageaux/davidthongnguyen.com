import { environment } from './../environments/environment';
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { distinctUntilChanged } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

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

  constructor(private router: Router, private titleService: Title) {
    $('body').scrollspy({ target: '', offset: 100 });
    this.router.events
      .pipe(
        distinctUntilChanged((previous: any, current: any) => {
          if (current instanceof NavigationEnd) {
            return previous.url === current.url;
          }
          return true;
        })
      )
      .subscribe((x: any) => {
        // TODO: detect route for blogs
      });

    $(window).on('activate.bs.scrollspy', e => {
      const navId = window.innerWidth < 992 ? 'top-menu' : 'lg-screen-menu';
      const selector = `#${navId} .nav-item .active`;

      if (!$(selector)[0]) {
        return;
      }

      const section: string = $(selector)[0].href;
      history.replaceState({}, '', section);

      this.titleService.setTitle(
        $(selector)[0].textContent +
          ' | ' +
          'David Thong Nguyen - Software Engineer & UX Advocate'
      );

      ga('set', 'page', section);
      ga('send', 'pageview');
    });
  }
}
