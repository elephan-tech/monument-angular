import { environment } from 'src/environments/environment';
import { isEmpty } from 'lodash';
import { ApiService } from 'src/app/services/api/api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-national-school-lunch-program',
  templateUrl: './national-school-lunch-program.component.html',
  styleUrls: ['./national-school-lunch-program.component.scss'],
})
export class NationalSchoolLunchProgramComponent implements OnInit, OnDestroy {
  pageTitle: string;
  heroImg: string;
  menuData: any;
  fields: any;
  items = [
    { name: 'breakfast', icon: 'cafe',  collapsed: true},
    { name: 'lunch', icon: 'fast-food',  collapsed: true},
    { name: 'vegetarian', icon: 'leaf',  collapsed: true},
    { name: 'snack', icon: 'nutrition',  collapsed: true},
    { name: 'supper', icon: 'pizza',  collapsed: true},
  ];
  currentItem: any;
  pdf: any;
  uploadUrl = 'http://localhost:1337/';
  menuSub: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.uploadUrl = environment.apiUrl;
    this.pageTitle = 'National School Lunch Program';
    this.heroImg = 'assets/images/monument-8.png';
    this.menuSub = this.api.getData('menu');
    this.menuSub.subscribe(result => {
      if (!isEmpty(result)) {
        this.menuData = result?.data[0];
        this.fields = result?.fields;
      }
    });
  }

  ngOnDestroy(): void {
    this.menuSub.unsubscribe();
  }

  collapseMenu(item) {
    console.log('clicked');

    item.collapsed = !item.collapsed;
  }
}
