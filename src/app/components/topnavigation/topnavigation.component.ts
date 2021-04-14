import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-topnavigation',
  templateUrl: './topnavigation.component.html',
  styleUrls: ['./topnavigation.component.scss'],
})
export class TopnavigationComponent implements OnInit {
  resNav: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}
  openNav() {
    console.log('menu clicked');
    this.resNav = !this.resNav;
    const juanoNav = document.getElementById('responsive');
    if (this.resNav == true) {
      juanoNav.classList.remove('nav-span');
      juanoNav.classList.remove('hide-nav');
      juanoNav.classList.add('show-nav');
      //juanoNav.style.display = "block";
    } else {
      // juanoNav.className = "nav-span";
      //juanoNav.style.display = "none";
      juanoNav.classList.remove('show-nav');
      juanoNav.classList.add('hide-nav');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 20) {
      document
        .getElementById('top-logo-switch')
        .classList.add('top-logo-smaller');
      document.getElementById('top-logo-switch').classList.remove('top-logo');
      document
        .getElementById('red-top-banner')
        .classList.remove('red-top-banner');
      document
        .getElementById('red-top-banner')
        .classList.add('red-top-banner-none');
    } else if (document.documentElement.scrollTop < 20) {
      document
        .getElementById('top-logo-switch')
        .classList.remove('top-logo-smaller');
      document.getElementById('top-logo-switch').classList.add('top-logo');
      document
        .getElementById('red-top-banner')
        .classList.remove('red-top-banner-none');
      document.getElementById('red-top-banner').classList.add('red-top-banner');
    }
  }
}
