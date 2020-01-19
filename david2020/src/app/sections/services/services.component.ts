import { Component, OnInit } from '@angular/core';

import { faAngular } from '@fortawesome/free-brands-svg-icons';
// import { faUser } from '@fortawesome/pro-regular-svg-icons';
import {
  faTasks,
  faSitemap,
  faPaperPlane
} from '@fortawesome/pro-regular-svg-icons';
import { faPhoneLaptop } from '@fortawesome/pro-light-svg-icons';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  faAngular = faAngular;
  faTasks = faTasks;
  faPhoneLaptop = faPhoneLaptop;
  faSitemap = faSitemap;
  faPaperPlane = faPaperPlane;

  constructor() {}

  ngOnInit() {}
}
