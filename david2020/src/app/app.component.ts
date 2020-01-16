import { Component } from '@angular/core';
import {
  faGithub,
  faLinkedin,
  faAngular
} from '@fortawesome/free-brands-svg-icons';
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
  faCommentAltSmile,
  faTasks,
  faSitemap,
  faPaperPlane
} from '@fortawesome/pro-regular-svg-icons';
import { faPhoneLaptop } from '@fortawesome/pro-light-svg-icons';

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

  // navs
  faUser = faUser;
  faLaptopCode = faLaptopCode;
  faPhone = faPhone;
  faCommentAltSmile = faCommentAltSmile;
  fasUser = fasUser;
  fasLaptopCode = fasLaptopCode;
  fasPhone = fasPhone;
  fasCommentAltSmile = fasCommentAltSmile;

  // content
  faAngular = faAngular;
  faTasks = faTasks;
  faPhoneLaptop = faPhoneLaptop;
  faSitemap = faSitemap;
  faPaperPlane = faPaperPlane;

  particleNum = 50;

  thisDate = new Date();
  gamingStartDate = new Date(2000, 1);
  gamingExperience: number =
    this.thisDate.getFullYear() - this.gamingStartDate.getFullYear();
  codingStartDate = new Date(2013, 8);
  codeExperience =
    this.thisDate.getFullYear() - this.codingStartDate.getFullYear();

  constructor() {}
}
