import { environment } from './../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  particleNum = 50;

  thisDate = new Date();
  gamingStartDate = new Date(2000, 1);
  gamingExperience: number =
    this.thisDate.getFullYear() - this.gamingStartDate.getFullYear();
  codingStartDate = new Date(2013, 8);
  codeExperience =
    this.thisDate.getFullYear() - this.codingStartDate.getFullYear();

  // dev vs prod
  name = environment.production ? 'David Thong Nguyen' : 'Lorem Ipsum Name';
  title = environment.production ? 'Software Engineer' : 'Lorem Ipsum Title';
  profilePic = environment.production
    ? 'https://cdn130.picsart.com/240548021044202.jpg?r1024x1024'
    : 'https://cdn130.picsart.com/240548021044202.jpg?r1024x1024';

  constructor() {}
}
