import { Apollo } from 'apollo-angular';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { isEmpty } from 'lodash';
import { Subscription, BehaviorSubject } from 'rxjs';
import { ScreensizeService } from '../../services/screen-size/screensize.service';
import { ApiService } from './../../services/api/api.service';
import useQuery from '../../api/queries';
import { environment } from 'src/environments/environment';
import { Observable } from '@apollo/client/utilities';

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
  display: boolean;
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
  EmergencyMessage = new BehaviorSubject([]);

  constructor(
    private screensizeService: ScreensizeService,
    public router: Router,
    private apollo: Apollo,
    private api: ApiService
  ) {
    this.screensizeService.isDesktopView().subscribe((isDesktop) => {
      this.isDesktop = isDesktop;
    });
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const query = useQuery('emergencyMessage');
    const watchQuery = this.apollo.watchQuery<any>({
      query,
      pollInterval: environment.production
        // production polls every 24 hrs
        ? 1000 * 60 * 60 * 24
        // development polls every 2 seconds
        : 2000,
    });


    watchQuery.valueChanges.subscribe(({ data }) => {
      const collectionData = this.api.formatData('emergencyMessage', data);
      !isEmpty(data) ? this.EmergencyMessage.next(collectionData) : this.EmergencyMessage.next([]);
    });

    this.EmergencyMessage.subscribe((obs: any) => {
      this.emergencyMessage = obs?.data?.[0];
      this.showEmergency = obs?.data?.[0].display.value;
    });

  }

  toggleMenu(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }

  subMenuToggle(menuItem): void {
    menuItem.subMenuOpen = !menuItem.subMenuOpen;
  }

  dismissEmergency(): void {
    this.showEmergency = false;
  }

  showSubMenus(nav: NavItem): void {
    this.closeAllMenus();
    if (nav.subMenus) {
      nav.subMenuOpen = true;
    }
  }

  hideSubMenus(nav: NavItem): void {
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

  closeAllMenus(): void {
    this.navItems.forEach((element) => {
      element.subMenuOpen = false;
    });
  }

  navClick(nav: NavItem): void | null {
    if (nav.subMenus) {
      this.subMenuToggle(nav);
    }
    return null;
  }

  login(): void {}

  //
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
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
