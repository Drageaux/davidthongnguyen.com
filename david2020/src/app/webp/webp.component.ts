import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-webp',
  templateUrl: './webp.component.html',
  styleUrls: ['./webp.component.scss']
})
export class WebpComponent implements OnInit {
  @Input() imgSubDir = '';
  @Input() imgName;
  @Input() fileType;
  @Input() imgClass;
  @Input() imgAlt;
  @Input() specs: {
    sizes: string;
    widthList: number[];
  };

  webpSrcset = '';
  regSrcset = '';

  constructor() {}

  ngOnInit() {
    console.log(this.imgSubDir);
    if (!this.imgName) {
      throw new TypeError('"imgName" is required');
    }
    if (!this.fileType) {
      throw new TypeError('"fileType" is required');
    }
    if (!this.imgAlt) {
      console.warn('"imgAlt is recommended"');
    }
    if (this.specs && this.specs.widthList) {
      this.specs.widthList.forEach((width, index) => {
        this.webpSrcset += `assets/${this.imgSubDir}/${this.imgName}-${width}w.webp ${width}w`;
        this.regSrcset += `assets/${this.imgSubDir}/${this.imgName}-${width}w.${this.fileType} ${width}w`;
        if (index < this.specs.widthList.length) {
          this.webpSrcset += ',';
          this.regSrcset += ',';
        }
      });
    }
    console.log(this.webpSrcset, this.regSrcset);
  }
}
