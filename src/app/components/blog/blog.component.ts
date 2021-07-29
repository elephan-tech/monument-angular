import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsCalendarService } from '../../services/events/events-calendar.service';
import { BlogPost } from '../../models/blog-posts';

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
  id;
  sub;

  constructor(
    private Activatedroute: ActivatedRoute,
    private router: Router,
    private eventService: EventsCalendarService
  ) {}

  ngOnInit(): void {
    this.id = this.Activatedroute.snapshot.params.blogID;
    this.blog = this.eventService.getBlogPostByID(this.id);
  }
}
