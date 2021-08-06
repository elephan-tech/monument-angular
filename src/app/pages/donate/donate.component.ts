import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `<div [innerHTML]="data | safeHtml"></div>`,
})
export class DonateComponent implements OnInit {
  pageTitle: string;
  heroImg: string;

  constructor() {}

  ngOnInit(): void {
    this.pageTitle = 'Donate';
    this.heroImg = 'assets/images/monument-10.png';
  }
}
