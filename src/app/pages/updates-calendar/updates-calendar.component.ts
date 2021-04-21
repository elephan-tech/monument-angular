import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updates-calendar',
  templateUrl: './updates-calendar.component.html',
  styleUrls: ['./updates-calendar.component.scss'],
})
export class UpdatesCalendarComponent implements OnInit {
  pageTitle: string;
  heroImg: string;

  constructor() {}

  ngOnInit() {
    this.pageTitle = 'Calendar Updates & Events';
  }
}
