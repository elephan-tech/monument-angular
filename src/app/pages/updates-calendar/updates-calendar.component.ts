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
      year: '2022-23',
      pdf: '../../../assets/documents/2022-2023 Monument Academy - 2022-23 Calendar.pdf',
    },
  ];
  calendar = [
    {
      year: '2023-24',
      pdf: '../../../assets/documents/2023-2024 Monument Academy Calendar.pdf',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.pageTitle = 'Calendar Updates & Events';
  }
}
