import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/pro-regular-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faPaperPlane = faPaperPlane;

  constructor() {}

  ngOnInit() {}
}
