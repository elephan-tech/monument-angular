import { slideOpts } from './slider.config';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { loremIpsum } from 'lorem-ipsum';

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

  slideOpts = slideOpts.coverflow;
  lorem = loremIpsum({
    units: 'paragraph',
  });

  constructor() {}

  ngOnInit(): void {
    this.slides = [
      {
        isBeginningSlide: true,
        isEndSlide: false,
        title: 'Teacher of the Year',
        description: this.lorem,
        image: '../../../assets/monument-main-logo.png',
      },
      {
        isBeginningSlide: true,
        isEndSlide: false,
        title: 'Student of the Year',
        description: this.lorem,
        image: '../../../assets/images/hero-main.png',
      },
    ];

    this.currentSlide = this.slides[0];
  }

  slideNext(slideView, i) {
    console.log({ slideView });
    slideView.slideNext(500).then((d) => {
      console.log({ d });
      this.checkIfNavDisabled(slideView, i);
    });
  }

  //Move to previous slide
  slidePrev(slideView, i) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(slideView, i);
    });
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(slideView, i) {
    this.checkIfNavDisabled(slideView, i);
  }

  //Call methods to check if slide is first or last to enable disbale navigation
  checkIfNavDisabled(slideView, i) {
    console.log('is disabled', { slideView });
    this.checkisBeginning(slideView, i);
    this.checkisEnd(slideView, i);
  }

  checkisBeginning(slideView, i) {
    slideView.isBeginning().then((istrue) => {
      this.slides[i].isBeginningSlide = istrue;
    });
  }
  checkisEnd(slideView, i) {
    slideView.isEnd().then((istrue) => {
      this.slides[i].isEndSlide = istrue;
    });
  }
}
