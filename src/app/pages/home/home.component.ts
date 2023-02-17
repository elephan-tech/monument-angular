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
      stat: 'Top 5%',
      description: `In Instructional Culture, per the Fall 2020 Teacher Insight Survey`
    },
    {
      stat: '91.2%',
      description: `In-Seat Attendance Rate for the 2019-20 School Year`
    },
    {
      stat: `3`,
      description: `College Visits Per Year`
    },
    {
      stat: `100%`,
      description: `Of Students Participate in Extended Day Programs`
    },
    {
      stat: `100%`,
      description: `Of Students Participate in Junior Achievement`
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
