import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsCalendarService } from '../../services/events/events-calendar.service';
import { BlogPost } from '../../models/blog-posts';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `<div [innerHTML]="data | safeHtml"></div>`,
})
export class BlogComponent implements OnInit {
  pageTitle: string;
  heroImg: string;

  blog: BlogPost;
  id:any;

  constructor(
    private Activatedroute: ActivatedRoute,
    private router: Router,
    private eventService: EventsCalendarService,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.id = this.Activatedroute?.snapshot?.params?.blogID;
    this.apollo.watchQuery({
      query: gql`
      query Articles{
        article(id: ${this.id}){
          title
          image {
            url
          }
          content
          date
          name
          display
          subtitle
          link
          location
          id
        }
      }
      `
    }).valueChanges.subscribe((result) => {
      this.blog = (result.data as any).article as BlogPost;
    });
  }
}
