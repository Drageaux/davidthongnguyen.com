import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEye } from '@fortawesome/pro-solid-svg-icons';
// import { faUser } from '@fortawesome/pro-regular-svg-icons';
import {
  faUser,
  faLaptopCode,
  faPhone,
  faCommentAltSmile
} from '@fortawesome/pro-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faDownload = faDownload;
  faEye = faEye;

  faUser = faUser;
  faLaptopCode = faLaptopCode;
  faPhone = faPhone;
  faCommentAltSmile = faCommentAltSmile;

  particleNum = 50;
}
