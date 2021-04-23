import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  pageTitle: string;
  heroImg: string;


  constructor() { }

  ngOnInit(): void {
    this.pageTitle = 'Oops!';
    this.heroImg = '';
  }

}
