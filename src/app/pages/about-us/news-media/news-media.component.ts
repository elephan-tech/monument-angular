import { environment } from './../../../../environments/environment';
import { ApiService } from 'src/app/services/api/api.service';
import { BlogPost } from './../../../models/blog-posts';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventsCalendarService } from '../../../services/events/events-calendar.service';
import isEmpty from 'lodash/isEmpty';
@Component({
  selector: 'app-news-media',
  templateUrl: './news-media.component.html',
  styleUrls: ['./news-media.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `<div [innerHTML]="data | safeHtml"></div>`,
})
export class NewsMediaComponent implements OnInit {
  pageTitle: string;
  heroImg: string;
  blogPosts: BlogPost[];
  content: any;

  articles: BlogPost[];
  articleSubject = new BehaviorSubject<BlogPost[]>([]);
  fields: any;
  uploadUrl = 'http://localhost:1337';

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.pageTitle = 'News & Media';
    this.uploadUrl = environment.apiUrl;


    this.api.getData('articles').subscribe(result => {
      if (!isEmpty(result)){
      this.articles = result?.data;
      this.fields = result?.fields;
      }
    });


  }
}
