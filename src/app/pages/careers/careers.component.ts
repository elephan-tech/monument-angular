import { ApiService } from './../../services/api/api.service';
import { Media } from './../../models/media';
import { UploadService } from './../../services/upload/upload.service';
import { Apollo } from 'apollo-angular';
import { Subscription, BehaviorSubject } from 'rxjs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CAREER_QUERY } from '../../api/queries';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `<div [innerHTML]="data | safeHtml"></div>`,
})
export class CareersComponent implements OnInit {

  constructor(private apollo: Apollo, private upload: UploadService, private api: ApiService) {}
  pageTitle: string;
  heroImg: string;
  careerSub: Subscription;
  careers: any;
  state: any;

  filesBS = new BehaviorSubject<Media[]>([])

  jobOpenings = [
    {
      jobTitle: 'Administrative Assistant (Operations)',
      category: '',
      url: '/assets/documents/careers/Administrative-Assistant-Description.pdf',
      shortDescription: '',
    },
    {
      jobTitle: 'Student Life Advisor',
      category: 'Student Life',
      url: '/assets/documents/careers/Houseparent-Job-Description.pdf',
      shortDescription: '',
    },
    {
      jobTitle: 'School Psychologist',
      category: 'Well-Being',
      url: '/assets/documents/careers/School-Psychologist-Job-Description.pdf',
      shortDescription: '',
    },
    // {
    //   jobTitle: 'School Counselor',
    //   category: 'Well-Being',
    //   url: '/assets/documents/careers/School-Counselor-Job Description.pdf',
    //   shortDescription: '',
    // },
    {
      jobTitle: 'School Counselor/Clinical Therapist',
      category: 'Well-Being',
      url: 'assets/documents/careers/School-Counselor-Clinical-Therapist.pdf',
      shortDescription: '',
    },
    {
      jobTitle: 'Special Education Teacher',
      category: 'Academics',
      url: 'assets/documents/careers/Special-Education-Teacher-Job-Description-2020-21.pdf',
      shortDescription: '',
    },
    {
      jobTitle: 'Teacher Assistant',
      category: 'Academics',
      url: 'assets/documents/careers/Teacher-Assistant-Job-Description-SY-2020-21.pdf',
      shortDescription: '',
    },
    // {
    //   jobTitle: 'Behavior Specialist',
    //   category: 'Behavior ',
    //   url: 'assets/documents/careers/Behavioral-Specialist-JD.pdf',
    //   shortDescription: '',
    // },
    {
      jobTitle: 'Food and Nutrition Associate',
      category: 'Operations',
      url: 'assets/documents/careers/MAPCS-Food-and-Nutrition-Job-Description-2020-21.pdf',
      shortDescription: '',
    },
  ];

  ngOnInit() {
    this.pageTitle = 'Careers';
    this.heroImg = 'assets/images/monument-7.png';
    const g = this.api.getData('careers')
    console.log({g})
  }


}
