import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-partnerships',
  templateUrl: './partnerships.component.html',
  styleUrls: ['./partnerships.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `<div [innerHTML]="data | safeHtml"></div>`,
})
export class PartnershipsComponent implements OnInit {
  pageTitle: string;
  heroImg: string;

  constructor() {}

  ngOnInit() {
    this.pageTitle = 'Partnerships';
    this.heroImg = '';
  }

  partners = [
    {
      name: 'City Bridge Foundation',
      src: 'assets/images/partners/cbf_logo.svg',
      url: 'https://citybridge.org/',
    },
    {
      name: 'DC Special Education Cooperative',
      src: 'assets/images/partners/DC-Special-Education-Cooperative.jpg',
      url: 'https://specialedcoop.org/',
    },
    {
      name: 'Milton Hershey School',
      src: 'assets/images/partners/MHS.png',
      url: 'https://www.mhskids.org/',
    },
    {
      name: 'EdOps',
      src: 'assets/images/partners/EdOps.png',
      url: 'https://www.ed-ops.com/',
    },
    {
      name: 'Flamboyan Foundation',
      src: 'assets/images/partners/Flamboyan-Foundation.png',
      url: 'https://flamboyanfoundation.org/',
    },
    {
      name: 'DBT in Schools',
      src: 'assets/images/partners/DBT.png',
      url: 'https://www.dbtinschools.com/',
    },
    {
      name: 'Books',
      src: 'assets/images/partners/books.png',
    },

    {
      name: 'Junior Achievement',
      src: 'assets/images/partners/junior-achievement.png',
    },
    {
      name: 'Friendship Public Charter School',
      src: 'assets/images/partners/friendship.svg',
    },
    {
      name: 'Smile Therapy Services',
      src: 'assets/images/partners/smile-therapy-services.png',
    },
    {
      name: 'Elaine Ellis Center of Health',
      src: 'assets/images/partners/elain-ellis.png',
      url: 'https://eechealth.com/',
    },
    {
      name: 'The George Washington University',
      src: 'assets/images/partners/gwu.jpg',
      url: 'https://www.gwu.edu/',
    },
  ];

  leraningCommunities = [
    {
      name: 'Bainum Foundation',
      src: 'assets/images/awards/Bainum.png',
      url: 'https://bainumfdn.org/',
    },
    {
      name: 'DC Public Charter School Board',
      src: 'assets/images/partners/dc-pcsb.png',
      url: 'https://dcpcsb.org/',
    },
    {
      name: 'Chan Zuckerberg Initiative',
      src: 'assets/images/awards/chan-zuckerberg.png',
      url: 'https://chanzuckerberg.com/',
    },
    {
      name: 'The Center for Health and Health Care in Schools',
      src: 'assets/images/partners/chhcs-new.png',
      url: 'http://healthinschools.org/',
    },
    {
      name: 'Edfuel',
      src: 'assets/images/partners/edfuel.png',
      url: 'https://www.edfuel.org/',
    },
    {
      name: 'The Bridgespan Group',
      src: 'assets/images/partners/bridgespan.png',
      url:
        'https://www.bridgespan.org/bridgespan-services/philanthropy/leading-for-impact-consulting-for-nonprofit-leader',
    },
  ];
  proBonoAssistance = [
    {
      name: 'WilmerHale',
      src: 'assets/images/partners/Wilmer-Hale.jpg',
      url: 'https://www.wilmerhale.com/',
    },
    {
      name: 'Arnold & Porter LLP',
      src: 'assets/images/partners/Arnold-Porter-LLP.png',
      url: 'https://www.arnoldporter.com/en/',
    },
    {
      name: 'Akin Gump Strauss Hauer & Feld LLP',
      src: 'assets/images/partners/Akin-Gump-Strauss-Hauer-Feld.jpg',
      url: 'https://www.akingump.com/en/',
    },
    {
      name: 'Lisa Vandenburgh Ltd.',
      src: 'assets/images/partners/Lisa-Vandenburgh-Ltd.png',
      url: 'https://lisavandenburgh.com/',
    },
    {
      name: 'K&L Gates LLP',
      src: 'assets/images/partners/KL-Gates.png',
      url: 'https://www.klgates.com/',
    },
  ];
}
