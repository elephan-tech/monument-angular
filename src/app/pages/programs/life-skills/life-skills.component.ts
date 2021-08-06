import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-skills',
  templateUrl: './life-skills.component.html',
  styleUrls: ['./life-skills.component.scss'],
  template: `<div [innerHTML]="data | safeHtml"></div>`,
})
export class LifeSkillsComponent implements OnInit {
  pageTitle: string;
  heroImg: string;

  constructor() {}

  ngOnInit(): void {
    this.pageTitle = 'Life Skills';
    this.heroImg = 'assets/images/monument-13.png';
  }
}
