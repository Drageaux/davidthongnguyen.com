import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  // TODO: read from JSON
  // default/pure-mobile < 350px = 200px
  // xs/big-mobile 350-576px = 450px
  // sm 576+ = 250px
  // md 768+ = 325px
  // lg 992+ = 410px
  // xl 1200+ = 260px

  thisDate = new Date();
  gamingStartDate = new Date(2000, 1);
  gamingExperience: number =
    this.thisDate.getFullYear() - this.gamingStartDate.getFullYear();

  constructor() {}

  ngOnInit() {
    $('a').click(function(e) {
      e.stopPropagation();
    });
  }

  testClick() {
    console.log('clicked');
  }

  testImage($event) {
    console.log($event);
    // console.log($event.path[0].currentSrc);
  }
}
