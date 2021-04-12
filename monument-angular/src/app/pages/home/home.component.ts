import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, {Navigation, Pagination} from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  slideOpts: {
    initialSlide: 1;
    speed: 400;
  };
  currentSlide: {
    title: string,
    description: string,
    image: string
  }
  slides=[]

  constructor() {

  }

  ngOnInit(): void {
    this.slides = [
      {
        title: 'Teacher of the Year',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
      mollitia, molestiae quas vel sint commodi repudiandae consequuntur
      voluptatum laborum numquam blanditiis harum quisquam eius sed odit
      fugiat iusto fuga praesentium optio, eaque rerum! Provident
      similique accusantium nemo autem. Veritatis obcaecati tenetur iure
      eius earum ut molestias architecto voluptate aliquam nihil,
      eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
      tenetur error, harum nesciunt ipsum debitis q`,
      image: '../../../assets/monument-main-logo.png'
      }
    ];
  this.currentSlide = this.slides[0]

  }

}
