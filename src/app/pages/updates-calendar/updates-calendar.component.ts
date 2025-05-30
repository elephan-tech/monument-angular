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
  ];
  calendar = [
    {
      year: '2025-26',
      pdf: '../../../assets/documents/2025-2026 Monument Academy Calendar.pdf',
    },
    {
      year: '2024-25',
      pdf: '../../../assets/documents/2024-25 Monument Academy Calendar.pdf',
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.pageTitle = 'Calendar Updates & Events';
  }
}
