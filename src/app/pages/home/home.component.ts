import {Component, OnInit, ViewEncapsulation, OnDestroy} from '@angular/core';

import {loremIpsum} from 'lorem-ipsum';

import {slideOpts} from './slider.config';

import {environment} from 'src/environments/environment';

import {ApiService} from 'src/app/services/api/api.service';
import {ScreensizeService} from '../../services/screen-size/screensize.service';

type Slide = {
  isBeginningSlide?: boolean;
  isEndSlide?: boolean;
  title: string;
  description: string;
  image: string;
  display: boolean;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide: Slide;
  slideOpts = slideOpts;
  lorem = loremIpsum({
    units: 'paragraph',
  });

  dataService: any;

  isDesktop: boolean;

  monumentalMarkers = [
    {
      stat: 'Top Performer ELA',
      description: `In Terms of Growth, in the 2020-2021 school year and 2021-2022 school year`
    },
    {
      stat: 'Top Performer Math',
      description: `In Terms of Growth, in the 2020-2021 school year and 2021-2022 school year`
    },
    {
      stat: 'Above Sector Average',
      description: `In-Seat Attendance Rate for 5th - 8th Grade for the 2021-22 school year`
    },
    {
      stat: 'High Performer',
      description: `Instructional Culture, per the Spring 2022 Teacher Insight Survey`
    },
    {
      stat: '100%',
      description: `Of Students Participate in Extended Day Programs and Make 3 College Visits Per Year`
    },
    {
      stat: '100%',
      description: `Of students Participate in Junior Achievement Project-Based Financial Literacy Programming`
    }
  ];

  monumentalSports = [
    'Basketball',
    'Football',
    'Soccer',
    'Volleyball',
    'Track',
    'Baseball'
  ];

  slides: Slide[];
  imageUrl = environment.apiUrl;

  constructor(private screenSizeService: ScreensizeService, private api: ApiService) {
    this.screenSizeService.isDesktopView().subscribe((isDesktop) => {
      this.isDesktop = isDesktop;
    });
  }

  ngOnInit(): void {

    this.dataService = this.api.getData('monumentalMoments').subscribe(value => {
      this.slides = value?.data?.filter(({display, ...foo}) => {
        return display?.value;
      });
    });

    this.currentSlide = this.slides?.[0];
  }

  ngOnDestroy(): void {
    this.dataService.unsubscribe();
  }

  slideNext(slideView): void {
    slideView.slideNext(300);
  }

  slidePrev(slideView): void {
    slideView.slidePrev(300);
  }
}
