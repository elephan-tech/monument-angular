import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boarding-student-life-program',
  templateUrl: './boarding-student-life-program.component.html',
  styleUrls: ['./boarding-student-life-program.component.scss'],
})
export class BoardingStudentLifeProgramComponent implements OnInit {
  pageTitle: string;
  heroImg: string;

  constructor() {}

  ngOnInit() {
    this.pageTitle = 'family-style boarding program';
    this.heroImg = 'assets/images/monument-17.png';
  }
}
