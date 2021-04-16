import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-national-school-lunch-program',
  templateUrl: './national-school-lunch-program.component.html',
  styleUrls: ['./national-school-lunch-program.component.scss'],
})
export class NationalSchoolLunchProgramComponent implements OnInit {
  pageTitle: string;
  heroImg: string;

  constructor() {}

  ngOnInit() {
    this.pageTitle = 'National School Lunch Program';
    this.heroImg = 'assets/images/monument-8.png';
  }
}
