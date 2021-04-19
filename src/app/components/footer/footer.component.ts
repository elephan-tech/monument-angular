import { Component, OnInit } from '@angular/core';

export interface Social {
  icon: string;
  href: string;
  fill: string;
  target: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  socials: Social[] = [
    {
      icon: 'mail',
      href: '/contact-us',
      fill: 'clear',
      target: '',
    },
    {
      icon: 'logo-facebook',
      href: 'https://www.facebook.com/monumentacademy',
      fill: 'clear',
      target: '_blank',
    },
    {
      icon: 'logo-twitter',
      href: 'https://twitter.com/monumentacademy',
      fill: 'clear',
      target: '_blank',
    },
    {
      icon: 'logo-instagram',
      href: 'https://www.instagram.com/monumentacademy',
      fill: 'clear',
      target: '_blank',
    },
    {
      icon: 'logo-linkedin',
      href:
        'https://www.linkedin.com/company/monument-academy-public-charter-school/',
      fill: 'clear',
      target: '_blank',
    },
    {
      icon: 'logo-vimeo',
      href:
        'https://www.instagram.com/explore/locations/307312599426465/monument-academy/',
      fill: 'clear',
      target: '_blank',
    },
  ];
  constructor() {}

  ngOnInit() {}

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
