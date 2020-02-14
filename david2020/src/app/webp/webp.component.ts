import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-webp',
  templateUrl: './webp.component.html',
  styleUrls: ['./webp.component.scss']
})
export class WebpComponent implements OnInit {
  @Input() imgName;
  @Input() fileType;
  @Input() imgClass;
  @Input() imgAlt;

  constructor() {}

  ngOnInit() {
    if (!this.imgName) {
      throw new TypeError('"imgName" is required');
    }
    if (!this.fileType) {
      throw new TypeError('"fileType" is required');
    }
    if (!this.imgAlt) {
      console.warn('"imgAlt is recommended"');
    }
  }
}
