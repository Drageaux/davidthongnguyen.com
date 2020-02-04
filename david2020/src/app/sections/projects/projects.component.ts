import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
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

  test() {
    console.log('test');
  }
}
