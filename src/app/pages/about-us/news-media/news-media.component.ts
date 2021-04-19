import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-news-media',
  templateUrl: './news-media.component.html',
  styleUrls: ['./news-media.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `<div [innerHTML]="data | safeHtml"></div>`
})
export class NewsMediaComponent implements OnInit {
    pageTitle: string;
  heroImg: string;
  content: string;

  constructor() { }

  ngOnInit(): void {
    this.pageTitle = 'News & Media';
  }

}
