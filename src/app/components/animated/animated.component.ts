import { Component, Input, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
@Component({
  selector: 'app-animated',
  templateUrl: './animated.component.html',
  styleUrls: ['./animated.component.scss'],
})
export class AnimatedComponent implements OnInit {
  constructor() {}
  @Input() animation: string;
  @Input() children: any;

  ngOnInit(): void {
    console.log({ a: this.animation, c: this.children });
  }
}
