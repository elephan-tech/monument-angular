import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventsCalendarService } from '../../../services/events/events-calendar.service';
import { BlogPost } from '../../../blog-posts';

@Component({
  selector: 'app-news-media',
  templateUrl: './news-media.component.html',
  styleUrls: ['./news-media.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `<div [innerHTML]="data | safeHtml"></div>`
})
export class NewsMediaComponent implements OnInit {
  pageTitle: string;
  heroImg: string;
  blogPosts: BlogPost[];

  content = [
    {type: "title",content: "Interested in joining our team?"},
    {type:'info', content: "<b> Attend </b> our upcoming virtual job fair! Register below or email careers@monumentacademydc.org with any questions." },
    {type:"paragraph",content: "Tuesday, March 16th, 4 PM – 6 PM Our next open board meeting is Wednesday, March 17th at 6 PM. Register here." },
    {type:"closing",content: "Check out our recent feature on CBS This Morning HERE!" }
  ]
  constructor(private eventService: EventsCalendarService) { }

  ngOnInit(): void {
    this.pageTitle = 'News & Media';
    this.blogPosts = this.eventService.getAllBlogPosts();

    this.eventService.getAll().subscribe(
        res => this.content = res,
        err => console.log('not running mock api. run npm run server'),
        () => console.log('HTTP request completed.')
  );
  }

}
