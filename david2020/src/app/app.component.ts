import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEye as fasEye,
  faDownload as fasDownload,
  faUser as fasUser,
  faLaptopCode as fasLaptopCode,
  faPhone as fasPhone,
  faCommentAltSmile as fasCommentAltSmile
} from '@fortawesome/pro-solid-svg-icons';
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
  faEye = fasEye;
  faDownload = fasDownload;

  faUser = faUser;
  faLaptopCode = faLaptopCode;
  faPhone = faPhone;
  faCommentAltSmile = faCommentAltSmile;

  fasUser = fasUser;
  fasLaptopCode = fasLaptopCode;
  fasPhone = fasPhone;
  fasCommentAltSmile = fasCommentAltSmile;

  particleNum = 50;
}
