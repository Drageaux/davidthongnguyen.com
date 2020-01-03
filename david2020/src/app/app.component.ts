import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEye } from '@fortawesome/pro-solid-svg-icons';

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

  particleNum = 50;
}
