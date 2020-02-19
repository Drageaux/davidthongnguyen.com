import { environment } from './../environments/environment';
import { Component } from '@angular/core';

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
  profilePic = environment.production
    ? 'https://cdn130.picsart.com/240548021044202.jpg?r1024x1024'
    : 'https://cdn130.picsart.com/240548021044202.jpg?r1024x1024';

  coverPhotoSpecs = {
    widthList: [400, 600, 800],
    sizes: '(max-width: 992px) 90vw, 33vw'
  };

  constructor() {}
}
