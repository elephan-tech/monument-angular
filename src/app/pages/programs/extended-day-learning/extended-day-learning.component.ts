import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extended-day-learning',
  templateUrl: './extended-day-learning.component.html',
  styleUrls: ['./extended-day-learning.component.scss'],
  template: `<div [innerHTML]="data | safeHtml"></div>`,
})
export class ExtendedDayLearningComponent implements OnInit {
  pageTitle: string;
  heroImg: string;
  currentActivities = [
    {
      name: 'Literacy Club'
    },
    {
      name: 'Chess Club'
    },
    {
      name: 'Journalism Club'
    },
    {
      name: 'Chemistry Club'
    },
    {
      name: '3D Printing'
    },
    {
      name: 'Gardening'
    },
    {
      name: 'Math Motivators'
    },
    {
      name: 'BOKS Fitness '
    },
    {
      name: 'Dance Team'
    },
    {
      name: 'Drumline'
    }
  ];

    futureActivities = [
    {
      name: 'Coding Camp'
    },
    {
      name: 'Dance'
    },
    {
      name: 'Robotics'
    },
    {
      name: 'Gaming'
    },
    {
      name: 'Financial Literacy'
    },
    {
      name: 'Band'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.pageTitle = 'Extended Day Learning Opportunities';
    this.heroImg = 'assets/images/monument-4.png';
  }

}
