import { Component, OnInit, HostListener } from '@angular/core';
import { ScreensizeService } from '../../services/screensize.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

export interface NavItem {
  name: string;
  code: string;
  href?: string;
  subMenus?: NavItem[];
  subMenuOpen?: boolean;
  isFilledButton?: boolean;
}

export interface Social {
  icon: string;
  href: string;
  fill: string;
  target: string;
}

@Component({
  selector: 'app-topnavigation',
  templateUrl: './topnavigation.component.html',
  styleUrls: ['./topnavigation.component.scss'],
})
export class TopnavigationComponent implements OnInit {
  isDesktop: boolean;
  showEmergency = true;
  emergencyMessage =
    'this is an example for an emergency message. this is an example for an emergency message. this is an example for an emergency message. ';
  phoneNumber = '123-987-6540';
  monumentLogo = '../../../assets/monument-main-logo.png';
  brushStroke = '../../../assets/underline-stroke-blue.svg';
  menuIsOpen = false;
  navItems: NavItem[] = [
    {
      name: 'About Us',
      code: 'aboutUs',
      href: '/about-us',
      subMenus: [
        {
          name: 'About Us',
          code: 'aboutUs',
          href: '/about-us',
        },
        {
          name: 'Team',
          code: 'team',
          href: '/team',
        },
        {
          name: 'Board Of Directors',
          code: 'BOD',
          href: '/board-of-directors',
        },
        {
          name: 'Partnerships',
          code: 'partnerships',
          href: '/partnerships',
        },
        {
          name: 'Awards',
          code: 'awards',
          href: '/awards',
        },
        {
          name: 'News & Media',
          code: 'newsMedia',
          href: '/news-media',
        },
        {
          name: 'Donate',
          code: 'donate',
          href: '/donate',
        },
        {
          name: 'Contact Us',
          code: 'contact us',
          href: '/contact-us',
        },
      ],
      subMenuOpen: false,
    },
    {
      name: 'Our Programs',
      code: 'ourPrograms',
      href: '/programs',
      subMenus: [
        {
          name: 'A Day At Monument Academy',
          code: 'ADAMA',
          href: 'a-day-at-monument',
        },
        {
          name: 'Academics',
          code: 'academics',
          href: 'academics',
        },
        {
          name: 'Well Being',
          code: 'wellBeing',
          href: 'well-being',
        },
        {
          name: 'Life Skills',
          code: 'lifeSkills',
          href: 'life-skills',
        },
        {
          name: 'Boarding and Student Life Program',
          code: 'BSLP',
          href: 'boarding-and-life',
        },
        {
          name: 'National School Lunch Program',
          code: 'NSLP',
          href: 'national-school-lunch',
        },
      ],
      subMenuOpen: false,
    },
    {
      name: 'Enrollment',
      code: 'enrollment',
      href: '/enrollment',
    },
    {
      name: 'Careers',
      code: 'careers',
      href: '/careers',
    },
    {
      name: 'Knowledge Center',
      code: 'knowledgeCenter',
      href: '/knowledge-center',
    },
    {
      name: 'Family Resources',
      code: 'familyResources',
      href: '/family-resources',
    },
    {
      name: 'Donate',
      code: 'donate',
      href: '/donate',
      isFilledButton: true,
    },
  ];

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
  aboutUsSubMenu = false;

  constructor(
    private screensizeService: ScreensizeService,
    private menu: MenuController,
    private router: Router
  ) {
    this.screensizeService.isDesktopView().subscribe((isDesktop) => {
      console.log('is desktop view:', isDesktop);
      this.isDesktop = isDesktop;
    });
  }

  ngOnInit() {}

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  subMenuToggle(menuItem) {
    menuItem.subMenuOpen = !menuItem.subMenuOpen;
  }

  dismissEmergency() {
    this.showEmergency = false;
  }

  showSubMenus(nav: NavItem) {
    this.closeAllMenus();
    if (nav.subMenus) {
      nav.subMenuOpen = true;
    }
  }

  hideSubMenus(nav: NavItem) {
    if (nav.subMenus) {
      nav.subMenuOpen = false;
    }
  }

  getOpenMenu(typeToReturn: string): boolean | NavItem {
    let openMenu: NavItem;
    this.navItems.forEach((element) => {
      if (element.subMenuOpen === true) {
        openMenu = element;
      }
    });

    if (typeToReturn === 'navItem') {
      return openMenu;
    } else if (typeToReturn === 'boolean') {
      if (openMenu) {
        return true;
      } else {
        return false;
      }
    }
  }

  closeAllMenus() {
    this.navItems.forEach((element) => {
      element.subMenuOpen ? (element.subMenuOpen = false) : '';
    });
  }

  navClick(nav: NavItem) {
    if (nav.subMenus) {
      this.subMenuToggle(nav);
    }
    return null;
  }

  //
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.documentElement.scrollTop > 20) {
      document
        .getElementById('top-logo-switch')
        .classList.add('top-logo-smaller');
      document.getElementById('top-logo-switch').classList.remove('top-logo');
      document
        .getElementById('scroll-display')
        .classList.remove('scroll-display');
      document
        .getElementById('scroll-display')
        .classList.add('scroll-display-none');
    } else if (document.documentElement.scrollTop < 20) {
      document
        .getElementById('top-logo-switch')
        .classList.remove('top-logo-smaller');
      document.getElementById('top-logo-switch').classList.add('top-logo');
      document
        .getElementById('scroll-display')
        .classList.remove('scroll-display-none');
      document.getElementById('scroll-display').classList.add('scroll-display');
    }
  }
}
