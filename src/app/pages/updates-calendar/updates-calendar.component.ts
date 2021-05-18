import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updates-calendar',
  templateUrl: './updates-calendar.component.html',
  styleUrls: ['./updates-calendar.component.scss'],
})
export class UpdatesCalendarComponent implements OnInit {
  pageTitle: string;
  heroImg: string;

  calendars = [
    {
    year: '2020-2021',
    pdf: '../../../assets/documents/2020-2021 Calendar  - 2020-21 Calendar.pdf'
    },
    {
    year: '2021-2022',
    // pdf: ''
    }
  ]

  constructor() {}

  ngOnInit() {
    this.pageTitle = 'Calendar Updates & Events';
  }
}
