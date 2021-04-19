import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss'],
  template: `<div [innerHTML]="data | safeHtml"></div>`,
})
export class EnrollmentComponent implements OnInit {
  pageTitle: string;
  heroImg: string;
  constructor() {}

  ngOnInit() {
    this.pageTitle = 'Enrollment';
    this.heroImg = 'assets/images/monument-6.png';
  }
}
