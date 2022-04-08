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
  MSDCSeatAcceptanceForm: string;
  DCResidencyForm: string;
  constructor() {}

  ngOnInit(): void {
    this.MSDCSeatAcceptanceForm = '../../../assets/documents/MSDC-Seat-Acceptance-Form-22-23.pdf';
    this.DCResidencyForm = '../../../assets/documents/DC-Residency-Verification-Form-22-23.pdf';
    this.pageTitle = 'Enrollment';
    this.heroImg = 'assets/images/monument-6.png';
  }
}
