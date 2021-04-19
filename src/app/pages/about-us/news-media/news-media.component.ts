import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventsCalendarService } from '../../../services/events/events-calendar.service';

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
  content = [
    {type: 'title', content: 'NO EVENTS'},
    {type: 'info', content: 'No calendar'}
  ]

  constructor(private eventService: EventsCalendarService) { }

  ngOnInit(): void {
    this.pageTitle = 'News & Media';

    this.eventService.getAll().subscribe(
        res => this.content = res,
        err => console.log('not running mock api. run npm run server'),
        () => console.log('HTTP request completed.')
  );
  }

}
