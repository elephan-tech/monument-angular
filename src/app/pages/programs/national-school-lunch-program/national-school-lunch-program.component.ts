import { environment } from 'src/environments/environment';
import { isEmpty } from 'lodash';
import { ApiService } from 'src/app/services/api/api.service';
<<<<<<< HEAD
import { Component, OnDestroy, OnInit } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
>>>>>>> a18a5cdda50c48c8cf1d0bc11cefed0d44c83ef5

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

  hardcoded = true;

 menuDataHC = {
  name: 'September 2021',
  breakfast: {
    url: 'assets/documents/menus/SeptemberBreakfast.pdf'
  },
  lunch : {
    url: 'assets/documents/menus/SeptemberLunch.pdf'
  },
  vegetarian : {
    url: 'assets/documents/menus/SeptemberVegLunch.pdf'
  },
  snack : {
    url: 'assets/documents/menus/SeptemberSnack.pdf'
  },
  supper : {
    url: 'assets/documents/menus/SeptemberSupper.pdf'
  }
 }

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.uploadUrl = environment.apiUrl;
    this.pageTitle = 'National School Lunch Program';
    this.heroImg = 'assets/images/monument-8.png';
<<<<<<< HEAD
    this.menuSub = this.api.getData('menu');
    this.menuSub.subscribe(result => {
=======
    if (this.hardcoded) {
      this.menuData = this.menuDataHC;
    }  else {
      this.api.getData('menu').subscribe(result => {
>>>>>>> a18a5cdda50c48c8cf1d0bc11cefed0d44c83ef5
      if (!isEmpty(result)) {
        this.menuData = result?.data[0];
        this.fields = result?.fields;
      }
    });
    }
  }

  ngOnDestroy(): void {
    this.menuSub.unsubscribe();
  }

  collapseMenu(item) {
<<<<<<< HEAD
    console.log('clicked');

=======
>>>>>>> a18a5cdda50c48c8cf1d0bc11cefed0d44c83ef5
    item.collapsed = !item.collapsed;
  }
}
