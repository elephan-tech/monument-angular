import { Apollo } from 'apollo-angular';
import { Subscription, BehaviorSubject } from 'rxjs';
import { AuthService } from './../../services/auth/auth.service';
import { ApiService } from './../../services/api/api.service';
import { Component, OnInit } from '@angular/core';
import type { CdkDragStart } from '@angular/cdk/drag-drop';
import { EVENTS_QUERY, ANNOUNCEMENTS_QUERY } from '../../api/queries';
import { EventsCalendarService } from '../../services/events/events-calendar.service';
import useQuery from '../../api/queries';
import { DocumentNode } from 'graphql';
import { isEmpty } from 'lodash';
import { environment } from 'src/environments/environment';

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
  // public eventDate: (date: string) => Date;
  public today: Date = new Date();
  public isAdmin = false;
  public AnnouncementSub = new BehaviorSubject([]);
  public EventSub = new BehaviorSubject([]);

  dragPosition = { x: 0, y: -100 };

  constructor(
    public api: ApiService,
    public auth: AuthService,
    public apollo: Apollo
  ) {}


  ngOnInit(): void {
    this.getEventData();
    // this.EventSub.unsubscribe();
    this.getAnnouncements();
  }

  getEventData(): void{
    const query: DocumentNode = useQuery('events');
    const watchQuery = this.apollo.watchQuery<any>({
      query,
      pollInterval: environment.production
        // production polls every 24 hrs
        ? 1000 * 60 * 60 * 24
        // development polls every 2 seconds
        : 2000,
    });
    watchQuery.valueChanges.subscribe(({ data }) => {
      const collectionData = this.api.formatData('events', data);
      !isEmpty(data) ? this.EventSub.next(collectionData) : this.EventSub.next([]);
    });

    this.EventSub.subscribe((obs: any) => {
      this.eventData = obs?.data;
    });

  }



  getAnnouncements(): void {
    const query: DocumentNode = useQuery('announcements');

    const watchQuery = this.apollo.watchQuery<any>({
      query,
      pollInterval: environment.production
        // production polls every 24 hrs
        ? 1000 * 60 * 60 * 24
        // development polls every 2 seconds
        : 2000,
    });


    watchQuery.valueChanges.subscribe(({ data }) => {
      const collectionData = this.api.formatData('announcements', data);
      !isEmpty(data) ? this.AnnouncementSub.next(collectionData) : this.AnnouncementSub.next([]);
    });

    this.AnnouncementSub.subscribe((obs: any) => {
      this.announcementData = obs?.data;
    });
  }


  public handleDragStart(event: CdkDragStart): void {
    this.dragging = true;
  }

  public formatDate = (date: Date): string => {
    return date.toLocaleDateString('en', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  public handleClick(event: MouseEvent): void {
    if (this.dragging || this.clickedInside) {
      this.dragging = false;
      return;
    }
    this.dragPosition = { x: this.dragPosition.x, y: this.dragPosition.y };
  }

  eventDate(date): Date {
    return new Date(date);
  }
}
