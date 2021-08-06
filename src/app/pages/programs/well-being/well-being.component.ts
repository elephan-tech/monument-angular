import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-well-being',
  templateUrl: './well-being.component.html',
  styleUrls: ['./well-being.component.scss'],
})
export class WellBeingComponent implements OnInit {
  pageTitle: string;
  heroImg: string;

  constructor() {}

  ngOnInit(): void {
    this.pageTitle = 'Well Being Program';
    this.heroImg = 'assets/images/monument-3.png';
  }
}
