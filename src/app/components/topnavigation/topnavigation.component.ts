import { Component, OnInit, HostListener, Inject, Input } from '@angular/core';
import { ScreensizeService } from '../../services/screensize.service';
import { MenuController } from '@ionic/angular';

export interface NavItem {
	name: string;
	code: string;
	href?: string;
	subMenu?: NavItem[];
  subMenuOpen?: boolean
	isFilledButton?: boolean;
}

@Component({
	selector: 'app-topnavigation',
	templateUrl: './topnavigation.component.html',
	styleUrls: [ './topnavigation.component.scss' ]
})
export class TopnavigationComponent implements OnInit {
  isDesktop: boolean;
  showEmergency = true;
	emergencyMessage = 'this is an example for an emergency message. this is an example for an emergency message. this is an example for an emergency message. ';
  phoneNumber = '123-987-6540'
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
					name: 'Mission, Values, Philosophy',
					code: 'MVP',
					href: '/mission-values-philosophy'
				},
				{
					name: 'Team',
					code: 'team',
					href: '/team'
				},
				{
					name: 'Board Of Directors',
					code: 'BOD',
					href: '/board-of-directors'
				},
				{
					name: 'Partnerships',
					code: 'partnerships',
					href: '/partnerships'
				},
				{
					name: 'Awards',
					code: 'awards',
					href: '/awards'
				},
				{
					name: 'News & Media',
					code: 'newsMedia',
					href: '/news-media'
				},
				{
					name: 'Donate',
					code: 'donate',
					href: '/donate'
				},
				{
					name: 'About Us',
					code: 'aboutUs',
					href: '/about-us'
				},
				{
					name: 'Contact Us',
					code: 'contact us',
					href: '/contact-us'
				}
			],
      subMenuOpen: false
		},
		{
			name: 'Our Programs',
			code: 'ourPrograms',
			href: '/programs',
			subMenus: [
        {
					name: 'A Day At Monument Academy',
					code: 'ADAMA',
					href: 'day-at-monument'
				},
				{
					name: 'Academics',
					code: 'academics',
					href: 'academics'
				},
				{
					name: 'Well Being',
					code: 'wellBeing',
					href: 'well-being'
				},
        	{
					name: 'Life Skills',
					code: 'lifeSkills',
					href: 'life-skills'
				},
        				{
					name: 'Boarding and Student Life Program',
					code: 'BSLP',
					href: 'boarding-and-life'
				},				{
					name: 'National School Lunch Program',
					code: 'NSLP',
					href: 'national-school-lunch'
				}
      ],
      subMenuOpen: false
		},
		{
			name: 'Enrollment',
			code: 'enrollment',
			href: '/enrollment'
		},
		{
			name: 'Careers',
			code: 'careers',
			href: '/careers'
		},
		{
			name: 'Knowledge Center',
			code: 'knowledgeCenter',
			href: '/knowledge-center'
		},
		{
			name: 'Family Resources',
			code: 'familyResources',
			href: '/family-resources'
		},
		{
			name: 'Donate',
			code: 'donate',
			href: '/donate',
			isFilledButton: true
		}
	];

	constructor(private screensizeService: ScreensizeService, private menu: MenuController) {
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

  navHover(e, nav) {
   console.log(e.type);
   console.log(nav);
   if (nav.subMenus) {
     console.log('open sub menus');
   } else {
     console.log('nothing');
   }
  }

  dismissEmergency() {
    this.showEmergency = false;
  }

}
