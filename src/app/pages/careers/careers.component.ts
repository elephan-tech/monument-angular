import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `<div [innerHTML]="data | safeHtml"></div>`,
})
export class CareersComponent implements OnInit {
  pageTitle: string;
  heroImg: string;

  constructor() {}

  ngOnInit() {
    this.pageTitle = 'Careers';
    this.heroImg = 'assets/images/monument-7.png';
  }
  jobOpenings = [
    {
      jobTitle: 'Houseparent',
      category: 'Student Life',
      url:
        'https://monumentacademy.org/wp-content/uploads/2019/07/Houseparent-Job-Description_FINAL-2019-20.pdf',
      shortDescription: '',
    },
    {
      jobTitle: 'School Psychologist',
      category: 'Well-Being',
      url:
        'https://monumentacademy.org/wp-content/uploads/2020/07/School-Psychologist-Job-Description-SY2020-21.pdf',
      shortDescription: '',
    },
    {
      jobTitle: 'School Counselor',
      category: 'Well-Being',
      url:
        'https://monumentacademy.org/wp-content/uploads/2020/08/School-Counselor-Job-Description-Template-SY-2019-20-1.pdf',
      shortDescription: '',
    },
    {
      jobTitle: 'School Counselor/Clinical Therapist',
      category: 'Well-Being',
      url:
        'https://monumentacademy.org/wp-content/uploads/2021/03/School-Counselor_Clinical-Therapist-Job-Description-2020-21.docx.pdf',
      shortDescription: '',
    },
    {
      jobTitle: 'Special Education Teacher',
      category: 'Academics',
      url:
        'https://monumentacademy.org/wp-content/uploads/2021/02/Special-Education-Teacher-Job-Description-2020-21.pdf',
      shortDescription: '',
    },
    {
      jobTitle: 'Teacher Assistant',
      category: 'Academics',
      url:
        'https://monumentacademy.org/wp-content/uploads/2021/03/Teacher-Assistant-Job-Description-SY-2020-21-updated.docx.pdf',
      shortDescription: '',
    },
    {
      jobTitle: 'Behavior Specialist',
      category: 'Behavior ',
      url:
        'https://monumentacademy.org/wp-content/uploads/2021/03/Behavior-Specialist-Job-Description-2021-22.pdf',
      shortDescription: '',
    },
    {
      jobTitle: 'Food and Nutrition Associate',
      category: 'Operations',
      url:
        'https://monumentacademy.org/wp-content/uploads/2021/03/MAPCS-Food-and-Nutrition-Job-Description-2020-21.docx',
      shortDescription: '',
    },
  ];
}
