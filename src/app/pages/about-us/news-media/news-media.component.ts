import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventsCalendarService } from '../../../services/events/events-calendar.service';

export interface BlogPost {
  title: string;
  subtitle: string;
  article: {
    articleLocation: string;
    articleLink: string;
  }
  content: string;
  id: number;
  date: Date;
  image?: string;
  url?: string;
}

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
  blogPosts: BlogPost[] = [
    {
      title: 'COULD A CHARTER BOARDING SCHOOL HELP ROCHESTER’S MOST AT-RISK KIDS?',
      subtitle: 'Monument Academy Public Charter School — educating some of our nation’s most disadvantaged, traumatized, and at-risk kids.',
      article: {
        articleLocation: 'The Rochester Beacon',
        articleLink: 'https://rochesterbeacon.com/2019/04/01/could-a-charter-boarding-school-help-rochesters-most-at-risk-kids/'
      },
      content: 'paragraph here',
      id: 1,
      date: new Date(2019, 4, 1),
      image: '../../../../assets/images/news_media/Rochester-Pic.jpeg',
      url: ''
    },
    {
      title: 'NEW HOPE FOR THE HOMELESS',
      subtitle: 'They number in the millions and they often are hidden in plain sight.',
      article: {
        articleLocation: 'Thrive Global',
        articleLink: 'https://thriveglobal.com/stories/new-hope-for-the-homeless/'
      },
      content: 'paragraph here',
      id: 2,
      date: new Date(2019, 3, 18),
      image: '../../../../assets/images/news_media/New-Hope-for-the-Homeless.png',
      url: ''
    },
        {
      title: 'MONUMENT ACADEMY, FEATURED IN HARVARD ED. MAGAZINE',
      subtitle: 'A public boarding school provides a stable home away from home for some of D.C.’s most at-risk students.',
      article: {
        articleLocation: 'Harvard Ed. Magazine',
        articleLink: 'https://www.gse.harvard.edu/news/ed/19/01/monumental-effort'
      },
      content: 'paragraph here',
      id: 3,
      date: new Date(2019, 1, 15),
      image: '../../../../assets/images/news_media/Harvard.png',
      url: ''
    },
        {
      title: 'PARTNERSHIP SEEKS TO EXPAND SCHOOL-BASED MENTAL HEALTH SERVICES',
      subtitle: 'With the support of Bainum and the Center for Health and Health Care in Schools, Monument is expanding their mental health services — a vital need for every child.',
      article: {
        articleLocation: 'WJLA',
        articleLink: 'https://wjla.com/features/spotlight-on-education/41-million-investment-to-expand-school-based-mental-health-services'
      },
      content: 'paragraph here',
      id: 4,
      date: new Date(2018, 12, 23),
      image: '../../../../assets/images/news_media/mental_health.jpeg',
      url: ''
    },
        {
      title: 'THE ‘DATING APP’ THAT HELPS TEACHERS FIND A BEST-FIT SCHOOL',
      subtitle: 'A special education teacher found his best fit at Monument Academy, a school aligned with his goals and values.',
      article: {
        articleLocation: 'Forbes',
        articleLink: 'https://www.forbes.com/sites/emilylanghorne/2018/10/25/the-dating-app-that-helps-teachers-find-a-best-fit-school/#33c2f49e3190'
      },
      content: 'paragraph here',
      id: 5,
      date: new Date(2018, 10, 23),
      image: '../../../../assets/images/news_media/forbes.jpg',
      url: ''
    },
        {
      title: 'ONE RADICAL WAY TO DEAL WITH TRAUMATIZED KIDS',
      subtitle: 'Monument Academy is addressing the root causes of students’ behaviors, incorporating holistic interventions to support their success.',
      article: {
        articleLocation: 'Forbes',
        articleLink: 'https://www.forbes.com/sites/nataliewexler/2018/06/19/migrant-kids-arent-the-only-ones-experiencing-childhood-trauma/#f59240e6a5a2'
      },
      content: 'paragraph here',
      id: 6,
      date: new Date(2018, 6, 19),
      image: '../../../../assets/images/news_media/forbes-2.jpg',
      url: ''
    },
        {
      title: 'SCHOOL AND HOME',
      subtitle: 'Boarding programs and other charter innovations mix elements of family life and education for foster kid sin need of both.',
      article: {
        articleLocation: 'Philanthropy Roundtable',
        articleLink: 'https://www.philanthropyroundtable.org/philanthropy-magazine/article/school-and-home'
      },
      content: 'paragraph here',
      id: 7,
      date: new Date(2018, 3, 23),
      image: '../../../../assets/images/news_media/2018_spring_riley_photo1.jpeg',
      url: ''
    },
        {
      title: 'MONUMENT ACADEMY IN D.C. TRIES A NEW MODEL TO HELP KIDS IN FOSTER CARE — A CHARTER BOARDING SCHOOL',
      subtitle: 'Supporting the whole — providing academic and emotional support for all students.',
      article: {
        articleLocation: 'The74',
        articleLink: 'https://www.the74million.org/article/monument-academy-in-d-c-tries-a-new-model-to-help-kids-in-foster-care-a-charter-boarding-school/'
      },
      content: 'paragraph here',
      id: 8,
      date: new Date(2017, 9, 24),
      image: '../../../../assets/images/news_media/Monument2.jpeg',
      url: ''
    },
    {
      title: 'THE RISE OF URBAN PUBLIC BOARDING SCHOOLS',
      subtitle: 'Monument’s family-style boarding model provides stability for the students while learning life skills in addition to academics.',
      article: {
        articleLocation: 'The Atlantic',
        articleLink: 'https://www.theatlantic.com/education/archive/2015/12/urban-boarding-schools/421704/'
      },
      content: 'paragraph here',
      id: 9,
      date: new Date(2015, 12, 26),
      image: '../../../../assets/images/news_media/rise_of_urban_schools.jpeg',
      url: ''
    },

  ];

  content = [
    {type: "title",content: "Interested in joining our team?"},
    {type:'info', content: "<b> Attend </b> our upcoming virtual job fair! Register below or email careers@monumentacademydc.org with any questions." },
    {type:"paragraph",content: "Tuesday, March 16th, 4 PM – 6 PM Our next open board meeting is Wednesday, March 17th at 6 PM. Register here." },
    {type:"closing",content: "Check out our recent feature on CBS This Morning HERE!" }
  ]
  constructor(private eventService: EventsCalendarService) { }

  ngOnInit(): void {
    this.pageTitle = 'News & Media';

    this.eventService.getAll().subscribe(
        res => this.content = res,
        err => console.log('not running mock api. run npm run server'),
        () => console.log('HTTP request completed.')
  );
  }

}
