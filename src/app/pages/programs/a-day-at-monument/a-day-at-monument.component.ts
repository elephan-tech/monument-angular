import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-day-at-monument',
  templateUrl: './a-day-at-monument.component.html',
  styleUrls: ['./a-day-at-monument.component.scss'],
})
export class ADayAtMonumentComponent implements OnInit {
  pageTitle: string;
  heroImg: string;

  constructor() {}

  ngOnInit() {
    this.pageTitle = 'A Day At Monument Academy';
    this.heroImg = 'assets/images/monument-1.png';
  }
}