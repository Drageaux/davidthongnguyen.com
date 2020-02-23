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
    if (!this.imgName) {
      throw new TypeError('"imgName" is required');
    }
    if (!this.fileType) {
      throw new TypeError('"fileType" is required');
    }
    if (!this.imgAlt) {
      console.warn('"imgAlt is recommended"');
    }

    // create srcset if specs are provided
    if (this.specs && this.specs.widthList) {
      this.specs.widthList.forEach((width, index) => {
        this.webpSrcset += `assets/${
          this.imgSubDir ? this.imgSubDir + '/' : ''
        }${this.imgName}-${width}.webp ${width}w`;
        this.regSrcset += `assets/${
          this.imgSubDir ? this.imgSubDir + '/' : ''
        }${this.imgName}-${width}.${this.fileType} ${width}w`;

        if (index < this.specs.widthList.length - 1) {
          this.webpSrcset += ',';
          this.regSrcset += ',';
        }
      });
    }
  }
}
