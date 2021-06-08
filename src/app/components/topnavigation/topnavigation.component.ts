import { Component, OnInit, HostListener } from '@angular/core';
import { ScreensizeService } from '../../services/screen-size/screensize.service';
import { MenuController } from '@ionic/angular';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { SOCIAL_QUERY, EMERGENCY_QUERY } from '../../api/queries';

export interface NavItem {
  name: string;
  code: string;
  href?: string;
  subMenus?: NavItem[];
  subMenuOpen?: boolean;
  isFilledButton?: boolean;
}

export interface EmergencyMessage {
  headline: string;
  details?: string;
  link?: string;
}

export interface Social {
  icon: string;
  href: string;
  fill: string;
  target: string;
  display: boolean;
}

@Component({
  selector: 'app-topnavigation',
  templateUrl: './topnavigation.component.html',
  styleUrls: ['./topnavigation.component.scss'],
})
export class TopnavigationComponent implements OnInit {
  isDesktop: boolean;
  showEmergency = false;
  emergencyMessage: EmergencyMessage;
  phoneNumber = '(202) 545-3180';
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
          href: '/board',
        },
        {
          name: 'Meet Our CEO',
          code: 'CEO',
          href: '/meet-our-ceo',
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
          name: 'Calendar',
          code: 'calendar',
          href: '/updates-calendar',
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
          href: 'well-being-program',
        },
        {
          name: 'Life Skills',
          code: 'lifeSkills',
          href: 'life-skills-program',
        },
        {
          name: 'Boarding and Student Life Program',
          code: 'BSLP',
          href: 'boarding-student-life-program',
        },
        {
          name: 'National School Lunch Program',
          code: 'NSLP',
          href: 'national-lunch-program',
        },
        {
          name: 'Extended Day Learning Opportunities',
          code: 'EDL',
          href: 'extended-day-learning',
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
  backupSocials: Social[] = [
    {
      icon: 'mail',
      href: 'mailto:info@monumentacademydc.org',
      fill: 'clear',
      target: '_blank',
      display: true,
    },
    {
      icon: 'logo-facebook',
      href: 'https://www.facebook.com/monumentacademy',
      fill: 'clear',
      target: '_blank',
      display: true,
    },
    {
      icon: 'logo-twitter',
      href: 'https://twitter.com/monumentacademy',
      fill: 'clear',
      target: '_blank',
      display: true,
    },
    {
      icon: 'logo-instagram',
      href: 'https://www.instagram.com/monumentacademy',
      fill: 'clear',
      target: '_blank',
      display: true,
    },
    {
      icon: 'logo-linkedin',
      href: 'https://www.linkedin.com/company/monument-academy-public-charter-school/',
      fill: 'clear',
      target: '_blank',
      display: true,
    },
    {
      icon: 'logo-vimeo',
      href: 'https://www.instagram.com/explore/locations/307312599426465/monument-academy/',
      fill: 'clear',
      target: '_blank',
      display: true,
    },
  ];
  socialData: Social[];
  loading = true;
  errors: any;

  socials: Subscription;
  emergencies: Subscription;
  aboutUsSubMenu = false;
  currentRoute: string;
  showAdmin = true;

  constructor(
    private screensizeService: ScreensizeService,
    public router: Router,
    private apollo: Apollo
  ) {
    this.screensizeService.isDesktopView().subscribe((isDesktop) => {
      console.log('is desktop view:', isDesktop);
      this.isDesktop = isDesktop;
    });
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  ngOnInit() {
    this.apollo
      .watchQuery<any>({
        query: SOCIAL_QUERY,
      })
      .valueChanges.subscribe((result) => {
        this.socialData = result.data?.socialMedias;
        this.loading = result.loading;
      });

    console.log({ socials: this.socials });

    this.apollo
      .watchQuery<any>({
        query: EMERGENCY_QUERY,
      })
      .valueChanges.subscribe((result) => {
        this.emergencyMessage = result.data.emergencyMessage;
        this.showEmergency = result?.data?.emergencyMessage?.display;
      });
  }

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

  login() {}

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
