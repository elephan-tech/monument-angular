import { environment } from 'src/environments/environment';
import { isEmpty } from 'lodash';
import { ApiService } from 'src/app/services/api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-national-school-lunch-program',
  templateUrl: './national-school-lunch-program.component.html',
  styleUrls: ['./national-school-lunch-program.component.scss'],
})
export class NationalSchoolLunchProgramComponent implements OnInit {
  pageTitle: string;
  heroImg: string;
  menuData: any;
  fields: any;
  items = [
    { name: 'breakfast', icon: 'cafe' },
    { name: 'lunch', icon: 'fast-food' },
    { name: 'snack', icon: 'nutrition' },
    { name: 'supper', icon: 'pizza' },
  ];
  currentItem: any;
  pdf: any;
  uploadUrl = 'http://localhost:1337/';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.uploadUrl = environment.apiUrl;
    this.pageTitle = 'National School Lunch Program';
    this.heroImg = 'assets/images/monument-8.png';
    this.api.getData('menu').subscribe(result => {
      if (!isEmpty(result)) {
        this.menuData = result?.data[0];
        this.fields = result?.fields;
      }
    });
  }
}
