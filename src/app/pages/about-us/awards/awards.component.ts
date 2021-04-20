import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `<div [innerHTML]="data | safeHtml"></div>`,
})
export class AwardsComponent implements OnInit {
  pageTitle: string;
  heroImg: string;

  constructor() {}

  ngOnInit() {
    this.pageTitle = 'Awards';
    this.heroImg = 'assets/images/monument-9.png';
  }
  awards = [
    {
      name: 'Bainum Foundation',
      src: 'assets/images/awards/Bainum.png',
      url: 'https://bainumfdn.org/',
    },
    {
      name: 'Weyerhauser Family Foundation',
      src: 'assets/images/awards/Weyerhaeuser.jpg',
      url: 'https://wfamilyfoundation.org/',
    },
    {
      name: 'Chan Zuckerberg Initiative',
      src: 'assets/images/awards/chan-zuckerberg.png',
      url: 'https://chanzuckerberg.com/',
    },
    {
      name: 'Next Generation Learning Challenge',
      src: 'assets/images/awards/next-generationlearning-challenge.png',
      url: 'https://www.nextgenlearning.org/',
    },
    {
      name: 'Harman Family Foundation',
      src: 'assets/images/awards/harman-family-foundation.png',
      url: 'http://harman-foundation.org/',
    },
    {
      name: 'George Frederick Foundation East',
      src: 'assets/images/awards/george-frederick-foundation.png',
      url: 'https://projects.propublica.org/nonprofits/organizations/272954428',
    },
    {
      name: 'The Morris & Gwendolyn Cafritz Foundation',
      src: 'assets/images/awards/Cafritz.png',
      url: 'https://www.cafritzfoundation.org/',
    },
    {
      name: 'The Ceres Foundation',
      src: 'assets/images/awards/Ceres.jpg',
      url: 'https://fdnweb.org/ceres/',
    },
    {
      name: 'The J. Willard and Alice S. Marriot Foundation',
      src: 'assets/images/awards/Marriott-.jpeg',
      url: 'https://www.marriottfoundation.org/',
    },
    {
      name: 'The Walton Family Foundation',
      src: 'assets/images/awards/walton.jpg',
      url: 'https://www.waltonfamilyfoundation.org/',
    },
    {
      name: 'A. James & Alice B. Clrck Foundation',
      src: 'assets/images/awards/clarck-foundation.png',
      url: 'https://clarkfoundationdc.org/',
    },
  ];
}
