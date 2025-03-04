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
  DCUniversalHealthCertificate: string;
  DCHSchoolImmunizationRequirementsGuide: string;
  DCHealthOralAssessmentForm: string;
  constructor() {}

  ngOnInit(): void {
    this.MSDCSeatAcceptanceForm = '../../../assets/documents/MSDC-Seat-Acceptance-Form-22-23.pdf';
    this.DCUniversalHealthCertificate = '../../../assets/documents/2024-03-DCHealth-Universal-Health-Certificate-English.pdf';
    this.DCHSchoolImmunizationRequirementsGuide = '../../../assets/documents/2023_DCH_School-Immunization-Requirements-Guide.pdf';
    this.DCHealthOralAssessmentForm = '../../../assets/documents/2024-02-DCHealth-Oral-Assesment-Form-ENGLISH.pdf';
    this.DCResidencyForm = '../../../assets/documents/2025-26-DC-Residency-Verification-Fillable-Form-English.pdf';
    this.pageTitle = 'Enrollment';
    this.heroImg = 'assets/images/monument-6.png';
  }
}
