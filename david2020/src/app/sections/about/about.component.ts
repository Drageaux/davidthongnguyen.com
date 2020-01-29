import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  thisDate = new Date();
  gamingStartDate = new Date(2000, 1);
  gamingExperience: number =
    this.thisDate.getFullYear() - this.gamingStartDate.getFullYear();

  constructor() {}

  ngOnInit() {}
}
