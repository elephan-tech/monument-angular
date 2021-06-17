import { ApiService } from './../../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragStart } from '@angular/cdk/drag-drop';
import { EVENTS_QUERY, ANNOUNCEMENTS_QUERY } from '../../api/queries';
import { EventsCalendarService } from '../../services/events/events-calendar.service';

type EventData = {
  zoomUrl: string;
  assetUrl: string;
  date: string;
  file: [];
  id: string;
  __typename?: string;
};

type AnnouncementData = {
  displayText: string;
  image: [];
  file: [];
  id: string;
  date: string;
  __typename?: string;
};
@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss'],
})
export class EventCalendarComponent implements OnInit {
  public dragging: boolean;
  public clickedInside: boolean;
  public eventData: EventData;
  public announcementData: AnnouncementData;
  public content: any;
  public eventDate: (date: string) => Date;
  public today = new Date();

  dragPosition = { x: 0, y: -100 };

  constructor(
    private eventService: EventsCalendarService,
    public api: ApiService
  ) {}

  ngOnInit(): void {
    this.eventService.getAll().subscribe(
      (res) => (this.content = res),
      (err) => console.log('not running mock api. run npm run server'),
      () => console.log('HTTP request completed.')
    );
    const setEvents = (data: EventData) => {
      this.eventData = data;
      this.eventDate = (date) => new Date(date);
    };
    const setAnnouncements = (data: AnnouncementData) => {
      this.announcementData = data;
    };

    this.api.getData(EVENTS_QUERY, setEvents, 'events');
    this.api.getData(ANNOUNCEMENTS_QUERY, setAnnouncements, 'announcements');
  }

  public handleDragStart(event: CdkDragStart): void {
    this.dragging = true;
  }

  public formatDate = (date) => {
    return date.toLocaleDateString('en', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  public handleClick(event: MouseEvent): void {
    if (this.dragging || this.clickedInside) {
      this.dragging = false;
      return;
    }
    this.dragPosition = { x: this.dragPosition.x, y: this.dragPosition.y };
  }
}
