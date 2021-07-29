import { slideOpts } from './slider.config';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { loremIpsum } from 'lorem-ipsum';
import { ScreensizeService } from '../../services/screen-size/screensize.service';

type Slide = {
  isBeginningSlide: boolean;
  isEndSlide: boolean;
  title: string;
  description: string;
  image: string;
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  currentSlide: Slide;
  slides: Slide[];

  slideOpts = slideOpts;
  lorem = loremIpsum({
    units: 'paragraph',
  });

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

  constructor(private screenSizeService: ScreensizeService) {
        this.screenSizeService.isDesktopView().subscribe((isDesktop) => {
      this.isDesktop = isDesktop;
    });
  }

  ngOnInit(): void {

    this.slides = [
      {
        isBeginningSlide: true,
        isEndSlide: false,
        title: 'Teacher of the Year',
        description: ' COMING SOON ',
        image: '../../../assets/monument-main-logo.png',
      },
      {
        isBeginningSlide: true,
        isEndSlide: false,
        title: 'Student of the Year',
        description: ' COMING SOON ',
        image: '../../../assets/images/hero-main.png',
      },
    ];

    this.currentSlide = this.slides[0];
  }

  slideNext(slideView) {
    slideView.slideNext(300);
  }

  slidePrev(slideView) {
    slideView.slidePrev(300);
  }
}
